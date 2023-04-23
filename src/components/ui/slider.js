// components
import * as SliderRoot from '@radix-ui/react-slider'

const Slider = ({ defaultValue, min = 0, max = 100, value, onChange = () => { }, step, ariaLabel = '' }) => {

    return (
        <SliderRoot.Root
            defaultValue={[defaultValue]}
            min={min}
            max={max}
            step={step}
            aria-label={ariaLabel}
            value={value}
            onChange={onChange}
            className='relative flex items-center w-full'>
            <SliderRoot.Track className='relative flex-1 bg-tertiary-200 dark:bg-tertiary-700 h-0.5 rounded-full'>
                <SliderRoot.Range className='absolute bg-tertiary-900 dark:bg-tertiary-100 rounded-full h-0.5' />
            </SliderRoot.Track>
            <SliderRoot.Thumb className='block w-3 h-3 rounded-full bg-tertiary-950 dark:bg-tertiary-50' />
        </SliderRoot.Root>
    )
}

export default Slider