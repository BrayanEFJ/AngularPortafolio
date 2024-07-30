/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      cursor: {
        pointer: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAzVJREFUWIXtl89rVFcUxz9n7r3RWEMxKq2RSZVIDK2KNkYwUENMQxQNUVDwHxAFS1FxowtXogWhAXFXcFHBjYhSwYo6IdoESdGFijWoMSOJUfA3jVQSfcfNWOfdvDfOZALtwi8cmHe/593v95535s0Z+IT/GFJIssJ8EqxDaUaYDSQz1ADKIMJ5Ak4J3J5Ql+pYqo6UOjTPuKCO2uKFwWkph3UygU5GC4xASzmkYHNpxD4C/ZxpvOEE0FjkOVI4NsgLXuRtQMFRxlmElUWKv1e5xEuaBUZ8KhF5wzTacazEwoSEYQXlHIz25kGnU0eCniiuSChKnTzhavbi2Ao4fsIgGJjgEBwHfLnQKbWCGoRb4zjbMSCFcBgozZkrVMsgd95fhitgaYtx/wrLGkpYjGHE4wYZZYsMcQRDP4YfgSSGWzF7tWVL+gaaI5robwyr5T5nEJ5jUa/BdspjhnUuG7F8jeWZPGAQ5XssfREN2RxvwFDpuX1Jghbp5w+tIokhhWFSFp+Sfo5rBVNwHMys/aJVNMoAQwiNGNLenpW5DHwZShbWyl0uaw1zcFzEMC+LH0H4AYAy9pLgq8x6KY7ftIbl0scAllbPwOxw0cMG3oSuJfP2cswiYCZhtEsvvbqQGgJ2eNxj3vIw87kcE+JCGn4FwuVynNFFzJUbXMayGsOrfxsP9mVMtmMoybovjaFJeknrApbiOOlVoC/egOWe1zRJLOd1CRVyjS4sW7GAY6fcZFhr2YhlVVb+P0xihVynX7/lO0rowFLu7Xkv3kCC7oivTRWGC1pLJYbpGP6SqxzXb5hKgp+9XIcyS5exBsPvGMoi9uvOlgy/iOpIYkiPMRbGMMpmhDZgU468KAQYktLNUKQBAK2nE6GhwI3zRYd005S9MHZYKGEXAT3krsJ4EBCwx18cIyKdXMHy64T9FH+II9JFj68XPS59xjZeUw3UF3rMGPyJsD2KiB/JWpnBKB3AwiLFrzFKk6R4GkXGPmc5zRNeswzLoXHPAJajOOrjxCHPqUdbaUDYDbTkkw6cRdkvp+n6WHJhf0zWU43QAjQgzEH5IkM9AtIonSQ4Jyc+DByf8L/HO0NA+ySTMmN3AAAAAElFTkSuQmCC), copy',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

