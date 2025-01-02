document.head.appendChild(
  Object.assign(document.createElement("style"), {
    type: "text/tailwindcss",
    textContent: `
      @layer utilities {
        .selected {
          @apply border-b border-black underline-offset-2;
        }
        .team-member-card {
        @apply flex flex-col flex-none max-w-sm rounded-md items-center w-full px-4 py-5 bg-black/25;
        }
       .heading {
         @apply pt-3 text-5xl font-extrabold uppercase max-lg:text-4xl max-lg:font-bold max-md:text-3xl max-md:font-extrabold max-sm:text-2xl/5;
        }
        .avatar {
         @apply w-40 h-40 rounded-full bg-white;
        }
        .card-heading {
         @apply text-4xl font-semibold max-md:text-2xl/10 max-sm:text-xl/6 uppercase;
        }
        .card-desc {
         @apply px-3 text-center text-lg max-sm:text-base/5;
        }
        .primary-btn {
         @apply uppercase border-2 hover:bg-[#FF92C9] hover:border-black hover:shadow-2xl w-fit px-3 py-2 tracking-widest font-semibold flex items-center gap-3 duration-300 transition-all ease-in-out;
        }
        .input-field{
        @apply bg-secondary border-primary placeholder:text-primary/60 w-full rounded-lg px-3 py-2 outline-none max-sm:bg-secondary/20 max-sm:rounded-none max-sm:border-b max-sm:border-secondary max-sm:placeholder:text-secondary
        }
        .case-study-card {
        @apply w-56 min-w-56 max-md:text-sm text-nowrap bg-white py-1 text-center text-base font-medium uppercase;
        }
      }
      `,
  })
);
