import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const COMMAND_LIST = [
  'help',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact',
  'social',
  'whoami',
  'clear',
]

export default function Terminal() {
  const { t } = useLanguage()
  const [history, setHistory] = useState([{ type: 'output', text: t.terminal.welcome }])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  // Reset the greeting when the language changes so it stays accurate
  useEffect(() => {
    setHistory([{ type: 'output', text: t.terminal.welcome }])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [history])

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    if (cmd === 'clear') {
      setHistory([])
      return
    }

    let output
    const c = t.terminal.commands
    switch (cmd) {
      case 'help':
        output = c.help
        break
      case 'about':
        output = c.about
        break
      case 'skills':
        output = c.skills
        break
      case 'projects':
        output = c.projects
        break
      case 'experience':
        output = c.experience
        break
      case 'education':
        output = c.education
        break
      case 'contact':
        output = c.contact
        break
      case 'social':
        output = c.social
        break
      case 'whoami':
        output = c.whoami
        break
      default:
        output = c.notFound(cmd)
    }

    setHistory((h) => [...h, { type: 'command', text: raw }, { type: 'output', text: output }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    runCommand(input)
    setCommandHistory((h) => [...h, input])
    setHistoryIndex(-1)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!commandHistory.length) return
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setInput(commandHistory[nextIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex === -1) return
      const nextIndex = historyIndex + 1
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1)
        setInput('')
      } else {
        setHistoryIndex(nextIndex)
        setInput(commandHistory[nextIndex])
      }
    } else if (e.key === 'Tab') {
      const match = COMMAND_LIST.find((c) => c.startsWith(input.toLowerCase()))
      if (input && match) {
        e.preventDefault()
        setInput(match)
      }
    }
  }

  return (
    <div
      className="w-full max-w-3xl mx-auto border border-border bg-[#050505] text-[#e5e5e5] font-mono text-sm shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-auto text-xs text-[#666]">user@portfolio</span>
      </div>

      <div className="h-[420px] overflow-y-auto px-5 py-4 flex flex-col gap-3">
        {history.map((line, i) => (
          <div key={i}>
            {line.type === 'command' ? (
              <p className="text-[#e5e5e5]">
                <span className="text-[#27c93f]">{'>'}</span> {line.text}
              </p>
            ) : (
              <p className="text-[#999] whitespace-pre-line leading-relaxed">{line.text}</p>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-5 py-4 border-t border-[#1a1a1a]">
        <span className="text-[#27c93f]">{'>'}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          autoComplete="off"
          spellCheck="false"
          placeholder={t.terminal.placeholder}
          aria-label="Terminal input"
          className="flex-1 bg-transparent outline-none text-[#e5e5e5] placeholder:text-[#444] caret-[#27c93f]"
        />
        <span className="w-2 h-4 bg-[#27c93f] animate-blink" aria-hidden="true" />
      </form>
    </div>
  )
}
