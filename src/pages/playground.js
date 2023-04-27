
// state
import { useState } from 'react'

// components
import Switch from '@/components/ui/switch'
import RadioGroup from '@/components/ui/radioGroup'
import Button from '@/components/ui/button'

const Playground = () => {
    // data
    let styles = ['default', 'outline', 'ghost']
    let variants = ['default', 'primary', 'secondary']
    let sizes = ['sm', 'default', 'lg']

    // state
    let [style, setStyle] = useState('default')
    let [variant, setVariant] = useState('default')
    let [fullWidth, setFullWidth] = useState('false')
    let [size, setSize] = useState('default')
    let [disabled, setDisabled] = useState('false')
    let [loading, setLoading] = useState('false')


    return (
        <div className='flex flex-col md:flex-row gap-8 h-full'>
            {/* message */}
            <div className='h-full w-full flex sm:hidden items-center justify-center'>
                <div className='flex flex-col items-center  border border-tertiary-200 dark:border-tertiary-700 rounded-md p-4'>
                    <h2 className='font-bold text-3xl'>Oops!</h2>
                    <p className='text-center'>You need to be on a screen size of 640px or larger to see this page!</p>
                </div>
            </div>
            {/* toggles */}
            <div className='hidden sm:flex flex-col gap-4 p-4'>
                <p className='text-xl font-medium'>Component Playground:</p>
                <div className='flex md:flex-col flex-wrap gap-4'>
                    <div>
                        <p>Styles:</p>
                        <RadioGroup
                            values={styles}
                            defaultActive={style}
                            active={style}
                            setActive={setStyle}
                            size='sm'
                        />
                    </div>
                    <div>
                        <p>Variants:</p>
                        <RadioGroup
                            values={variants}
                            defaultActive={variant}
                            active={variant}
                            setActive={setVariant}
                            size='sm'
                        />
                    </div>
                    <div>
                        <p>Size:</p>
                        <RadioGroup
                            values={sizes}
                            defaultActive={size}
                            active={size}
                            setActive={setSize}
                            size='sm'
                        />
                    </div>
                    <div>
                        <p>Full Width:</p>
                        <RadioGroup
                            values={['true', 'false']}
                            defaultActive={fullWidth}
                            active={fullWidth}
                            setActive={setFullWidth}
                            size='sm'
                        />
                    </div>
                    <div>
                        <p>Loading:</p>
                        <RadioGroup
                            values={['true', 'false']}
                            defaultActive={loading}
                            active={loading}
                            setActive={setLoading}
                            size='sm'
                        />
                    </div>
                    <div>
                        <p>Disabled:</p>
                        <RadioGroup
                            values={['true', 'false']}
                            defaultActive={disabled}
                            active={disabled}
                            setActive={setDisabled}
                            size='sm'
                        />
                    </div>
                </div>
            </div>
            {/* playground */}
            <div className='p-4 hidden sm:flex justify-center items-center rounded-md border border-tertiary-200 dark:border-tertiary-700 flex-1'>
                <Button
                    disabled={disabled === 'true'}
                    loading={loading === 'true'}
                    size={size}
                    variant={variant}
                    fullWidth={fullWidth === 'true'}
                    style={style}
                >Click Me</Button>
            </div>
        </div>
    )
}

export default Playground