document.head.appendChild(
  Object.assign(document.createElement("style"), {
    type: "text/tailwindcss",
    textContent: `
      @layer utilities {
        .selected {
          @apply border-b border-black underline-offset-2;
        }
        .team-member-card {
        @apply flex flex-col items-center px-4 py-5 bg-black/25 min-h-96;
        }
       .heading {
         @apply text-center text-3xl underline uppercase font-semibold mb-6 underline-offset-4;
        }
        .avatar {
        @apply w-20 h-20 rounded-full bg-white;
        }
        .primary-btn {
        @apply uppercase border-2 hover:bg-white hover:text-black hover:border-black hover:shadow-2xl w-fit px-3 py-2 tracking-widest font-semibold flex items-center gap-3 mx-auto;
        }
      }
      `,
     
  })
);
