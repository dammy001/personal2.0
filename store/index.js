export const state = () => ({
  isOpen: false,
})

export const mutations = {
  setOpen(state) {
    state.isOpen = !state.isOpen
  },
}

export const actions = {}
