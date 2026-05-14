import React, { useState, useEffect, useRef, useCallback } from 'react';
import { base44 } from '@/api/base44Client';
import { X, Send, ChevronDown } from 'lucide-react';

// ─── Agent knowledge base ────────────────────────────────────────────────────
const QUICK_REPLIES = [
  { id: 'hospitals', label: 'What hospitals do you work with?' },
  { id: 'process',   label: 'How does the process work?' },
  { id: 'safe',      label: 'Is Mérida safe?' },
  { id: 'savings',   label: 'How much could I save?' },
];

const CANNED = {
  hospitals: "We work primarily with Star Médica Mérida and Faro del Mayab (CHRISTUS Muguerza) — both JCI-accredited and the gold standard for international patients. Clínica de Mérida and Centro Médico de Las Américas round out the four major options. All have bilingual staff and international patient coordinators. Want a breakdown by procedure type?",
  process: "The process is simpler than most people expect. You share your procedure of interest, we connect you with the right hospital and surgeon, coordinate your stay and recovery logistics, and are with you from arrival through your flight home — and 30 days after. Want me to walk you through a specific procedure?",
  safe: "Mérida has been ranked the safest city in Mexico for over a decade — crime rates are comparable to mid-size Canadian cities. There's a permanent expat community of 10,000+ North Americans here. It's genuinely different from the Mexico most people imagine. Anything specific you'd like to know about traveling here?",
  savings: "Most procedures run 50–70% less than US prices. Gastric sleeve surgery is around $6,500 USD versus $21,000 in the US. All-on-4 dental implants run $8,000–$12,000 versus $25,000+. The savings typically more than cover flights, recovery housing, and everything else. Want to look at a specific procedure?",
};

// ─── Jules LLM response ──────────────────────────────────────────────────────
async function askJules(history) {
  const systemPrompt = `You are Jules, the virtual concierge assistant for RecoverMérida (recovermerida.com) — a medical tourism resource for US and Canadian patients seeking procedures in Mérida, Mexico.

Your personality: warm, knowledgeable, calm, and unhurried. Like a well-traveled friend who knows Mérida's medical scene inside and out. Direct but never clinical. Never use phrases like "Great question!" or "I understand your concern."

Key facts you know:
- Mérida has 4 JCI-accredited hospitals: Star Médica Mérida, Faro del Mayab (CHRISTUS Muguerza), Clínica de Mérida, and Centro Médico de Las Américas.
- Procedures cost 30–70% less than US prices. Gastric sleeve ~$6,500 USD (vs $21K US). All-on-4 dental ~$8,000–12,000 (vs $25K+ US). Hip replacement ~$14,000 (vs $45K US). LASIK ~$1,200/eye (vs $2,500 US).
- Mérida is ranked the safest city in Mexico (INEGI), with 10,000+ North American expats.
- RecoverMérida provides: hospital coordination, recovery housing (two certified properties in north Mérida), 24/7 AI WhatsApp monitoring, bilingual coordination, meal prep, medication management, and 30-day remote follow-up.
- US/Canadian insurance: several carriers accepted via Amexcare (BCBS international, Cigna Global, Aetna International, GeoBlue, BUPA, Canadian Snowbird Association plans).
- Recovery timelines: dental 2–3 days, bariatric 7–10 days, plastic surgery 10–14 days, orthopedic 10–14 days, LASIK 3–5 days.
- All four hospitals have bilingual staff and international patient coordinators.
- No dedicated recovery hotels exist in Mérida yet — RecoverMérida operates two recovery-certified properties in northern Mérida.

Rules:
- If directly asked whether you're a real person, AI, or bot: acknowledge being a virtual assistant and add: "The real Jules is always in the background — every conversation is monitored and if something needs a human touch, Jules will follow up personally."
- Never deny being an AI when directly asked. Never volunteer it unless asked.
- If user writes in Spanish, respond in Spanish naturally.
- Keep responses to 2–4 sentences max. Offer a soft follow-up prompt at the end.
- After 2–3 exchanges, offer to connect them with Jules directly via email or WhatsApp.
- Never recommend specific doctors by name without caveats.
- Never provide a specific medical diagnosis or treatment plan.`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...history.map(m => ({ role: m.role, content: m.content })),
  ];

  const res = await base44.integrations.Core.InvokeLLM({
    prompt: messages.map(m => `${m.role === 'system' ? '[SYSTEM]' : m.role === 'user' ? '[USER]' : '[ASSISTANT]'}: ${m.content}`).join('\n\n'),
    response_json_schema: null,
  });

  return typeof res === 'string' ? res : (res?.text || res?.content || String(res));
}

// ─── Typing indicator ────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-end gap-1.5 px-4 py-3">
      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">J</div>
      <div className="flex gap-1 bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce"
            style={{ animationDelay: `${i * 150}ms`, animationDuration: '900ms' }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Contact capture form ────────────────────────────────────────────────────
function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [note, setNote] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    onSubmit({ name, contact, note });
    setDone(true);
  };

  if (done) {
    return (
      <div className="mx-4 my-2 rounded-2xl rounded-bl-sm bg-primary/5 border border-primary/20 p-4 text-sm text-foreground leading-relaxed">
        Done! Jules will reach out shortly. In the meantime, feel free to keep asking questions here.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-4 my-2 rounded-2xl bg-white border border-border p-4 space-y-2.5">
      <p className="text-xs font-semibold text-foreground">Pass your question to Jules directly:</p>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
      />
      <input
        type="text"
        placeholder="Email or WhatsApp"
        value={contact}
        onChange={e => setContact(e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
      />
      <textarea
        placeholder="Optional note..."
        value={note}
        onChange={e => setNote(e.target.value)}
        rows={2}
        className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none"
      />
      <button
        type="submit"
        className="w-full py-2 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
      >
        Send to Jules
      </button>
    </form>
  );
}

// ─── Main widget ─────────────────────────────────────────────────────────────
export default function JulesChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'greeting',
      role: 'assistant',
      content: "Hi! I'm Jules, your Mérida concierge guide. Ask me anything about medical procedures, hospitals, recovery, or getting started — I'm here to help.",
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const [unread, setUnread] = useState(false);
  const [proactiveSent, setProactiveSent] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const proactiveTimer = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Auto-focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  // 20-second proactive message
  useEffect(() => {
    if (proactiveSent || open) return;
    proactiveTimer.current = setTimeout(() => {
      if (!open) {
        setMessages(prev => [...prev, {
          id: 'proactive',
          role: 'assistant',
          content: "Planning a procedure in Mérida? I can help you figure out next steps.",
        }]);
        setUnread(true);
        setProactiveSent(true);
      }
    }, 20000);
    return () => clearTimeout(proactiveTimer.current);
  }, [open, proactiveSent]);

  const handleOpen = () => {
    setOpen(true);
    setUnread(false);
    clearTimeout(proactiveTimer.current);
  };

  const handleClose = () => setOpen(false);

  const addMessage = (role, content, extra = {}) => {
    const msg = { id: Date.now() + Math.random(), role, content, ...extra };
    setMessages(prev => [...prev, msg]);
    return msg;
  };

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setInput('');
    setShowChips(false);
    addMessage('user', trimmed);

    const newCount = exchangeCount + 1;
    setExchangeCount(newCount);
    setTyping(true);

    // Build history for LLM (exclude greeting, proactive, system)
    const history = [
      ...messages.filter(m => m.role === 'user' || m.role === 'assistant'),
      { role: 'user', content: trimmed },
    ];

    await new Promise(r => setTimeout(r, 600)); // minimum humanising delay

    let reply;
    try {
      reply = await askJules(history);
    } catch {
      reply = "I'm having a moment — try again in a second, or reach out via WhatsApp and Jules will get back to you shortly.";
    }

    setTyping(false);
    addMessage('assistant', reply);

    // Soft CTA after 2–3 exchanges
    if (newCount >= 2 && !showContactForm) {
      setTimeout(() => {
        setShowContactForm(true);
      }, 800);
    }
  };

  const handleQuickReply = (qr) => {
    setShowChips(false);
    addMessage('user', qr.label);
    setExchangeCount(c => c + 1);
    setTyping(true);

    const canned = CANNED[qr.id];
    setTimeout(() => {
      setTyping(false);
      addMessage('assistant', canned || "Happy to help with that — let me pull up the right details for you.");
    }, 900);
  };

  const handleContactSubmit = async ({ name, contact, note }) => {
    try {
      await base44.entities.Lead.create({
        first_name: name,
        whatsapp: contact.includes('@') ? '' : contact,
        email: contact.includes('@') ? contact : `chat-lead-${Date.now()}@noemail.placeholder`,
        procedure: 'Just exploring',
      });
      fetch('https://julesai.app.n8n.cloud/webhook/1766bbe0-97bc-407a-b3b7-799529ac2020', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name: name, contact, note, stage: 'Chat widget lead' }),
      }).catch(() => {});
    } catch {}
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* ── Chat Panel ── */}
      <div
        role="dialog"
        aria-label="Jules concierge chat"
        aria-modal="true"
        className={`fixed bottom-[84px] right-4 sm:right-6 z-50 transition-all duration-200 origin-bottom-right
          ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
          w-[calc(100vw-32px)] sm:w-[360px]
          max-h-[70svh] sm:max-h-[520px]
          flex flex-col
          bg-white rounded-2xl shadow-2xl border border-border overflow-hidden`}
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.14)' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-white shrink-0">
          <div className="relative shrink-0">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">J</div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground leading-none">Jules</p>
            <p className="text-xs text-muted-foreground mt-0.5">Recover Mérida Concierge</p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close chat"
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto py-3 space-y-1" aria-live="polite" aria-atomic="false">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-1.5 px-4 py-1`}>
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">J</div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                  ${msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-sm'
                    : 'bg-white border border-border text-foreground rounded-bl-sm'
                  }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {typing && <TypingDots />}

          {/* Quick-reply chips */}
          {showChips && !typing && (
            <div className="px-4 pt-1 pb-2 flex flex-wrap gap-2">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr.id}
                  onClick={() => handleQuickReply(qr)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}

          {/* Inline contact form */}
          {showContactForm && (
            <ContactForm onSubmit={handleContactSubmit} />
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input bar */}
        <div className="shrink-0 border-t border-border bg-white px-3 py-3 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Jules anything..."
            className="flex-1 px-3 py-2 text-sm rounded-xl border border-input bg-muted/40 focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || typing}
            aria-label="Send message"
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary text-white disabled:opacity-40 hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Trigger Button ── */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
        {/* Tooltip */}
        {showTooltip && !open && (
          <div className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md animate-in fade-in slide-in-from-bottom-1">
            Hi, I'm Jules — ask me anything about Mérida
          </div>
        )}

        <button
          onClick={handleOpen}
          aria-label="Chat with Jules"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center focus:outline-none
            ${!open ? 'animate-glow' : ''}`}
        >
          {open ? (
            <div className="w-full h-full bg-primary flex items-center justify-center">
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
          ) : (
            <img
              src="https://media.base44.com/images/public/6a0254f06a505803a56ab728/ec70309a0_CleanShot2026-05-14at434462x.png"
              alt="Chat with Jules"
              className="w-full h-full object-cover object-top"
            />
          )}

          {/* Unread badge */}
          {unread && !open && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white text-white text-[9px] font-bold flex items-center justify-center">1</span>
          )}
        </button>
      </div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 8px 2px hsl(var(--primary) / 0.6), 0 0 20px 6px hsl(var(--primary) / 0.3); }
          50% { box-shadow: 0 0 16px 6px hsl(var(--primary) / 0.9), 0 0 40px 14px hsl(var(--primary) / 0.5); }
        }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
      `}</style>
    </>
  );
}