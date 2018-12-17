jest.mock('@/api')
import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import userFixture from './fixtures/user'

describe('store actions', () => {
    let commit

    beforeEach( () => {
        commit = jest.fn()
    })

    it('search for user', async() => {
        const expectedUser = 'clovisjunior'

        await actions.SEARCH_USER( { commit }, { username: expectedUser })
        await flushPromises()

        expect(api.searchUser).toHaveBeenCalledWith(expectedUser)
        expect(commit).toHaveBeenCalledWith('SET_USER', userFixture)
    })
})