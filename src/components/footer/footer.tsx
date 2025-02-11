export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-4 gap-4 bg-slate-100 text-lg text-amber-800 lg:text-xl xl:flex-row xl:gap-6 xl:px-0">
      <p>
        Priscila Erica dos Santos | Cirurgiã Dentista Recife -
        CRO-PE9999.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <p className="flex gap-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.536-1.522.117-3.17 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.402 1.02.004 2.043.136 3 .402 2.292-1.552 3.3-1.23 3.3-1.23.654 1.648.24 2.867.117 3.17.768.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.22 0 1.604-.015 2.897-.015 3.292 0 .32.193.693.798.576 4.767-1.587 8.202-6.084 8.202-11.384 0-6.627-5.373-12-12-12z" />
            </svg>
          </span>
          <a href="https://github.com/carlos8402">GITHUB</a>
        </p>
        <p className="flex gap-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.23 0H1.77C.79 0 0 .775 0 1.733v20.535C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.775 1.77-1.733V1.733C24 .775 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.44a2.063 2.063 0 01-2.06-2.063A2.063 2.063 0 015.34 3.32a2.063 2.063 0 012.06 2.063A2.063 2.063 0 015.34 7.44zM20.45 20.452h-3.56v-5.573c0-1.33-.027-3.047-1.857-3.047-1.86 0-2.144 1.453-2.144 2.953v5.667h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.64 0 4.32 2.393 4.32 5.507v6.245z" />
            </svg>
          </span>
          <a href="https://www.linkedin.com/in/carlos-eduardo-r-freitas/">
            LINKEDIN
          </a>
        </p>
      </div>
      <p>
        Desenvolvido por:{" "}
        <span className="text-xl text-amber-600 font-semibold ">
          Carlos Eduardo
        </span>
      </p>
    </div>
  );
}
