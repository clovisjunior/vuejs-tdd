import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'
import VUserSearchForm from '@/components/VUserSearchForm'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('VUserSearchForm', () => {

    const build = () => {
        const options = { localVue }
        const wrapper = shallowMount(VUserSearchForm, options)
        const wrapperMounted = mount(VUserSearchForm, options)

        return {
            wrapper,
            wrapperMounted,
            input: () => wrapper.find('.search-form__input'),
            inputMounted: () => wrapperMounted.find('input'),
            button: () => wrapperMounted.find('button')
        }
    }

    it('renders the component', () => {
        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders main child components', () => {
        const { input, button } = build()

        expect(input().exists()).toBe(true)
        expect(button().exists()).toBe(true)
    })

    it('calls "submitted" event when submitting form', () => {
        const expectedUser = 'clovisjunior'
        const { wrapperMounted, button, inputMounted } = build()
        inputMounted().element.value = expectedUser

        inputMounted().trigger('input')
        button().trigger('click')
        button().trigger('submit')

        expect(wrapperMounted.emitted().submitted[0]).toEqual([expectedUser])
    })
})