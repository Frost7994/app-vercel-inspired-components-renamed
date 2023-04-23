import { Listbox } from '@headlessui/react'
import { HiOutlineChevronDown, HiCheck } from 'react-icons/hi'
import { cva } from 'class-variance-authority'



const Select = ({ options, selected, setSelected, variant }) => {
    let baseListboxOptionBgStyles = cva([], {})
    let baseListboxOptionTextStyles = cva([], {})

    return (
        <div className="fixed w-48">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative">
                    <Listbox.Button
                        className='relative w-full cursor-default rounded-md border bg-tertiary-50 border-tertiary-200 dark:bg-tertiary-950 dark:border-tertiary-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiOutlineChevronDown
                                className="h-5 w-5 text-tertiary-400 dark:text-tertiary-500"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Listbox.Options className="border border-tertiary-200 dark:border-tertiary-700 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-tertiary-50 dark:bg-tertiary-950 py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options.map((person, personIdx) => (
                            <Listbox.Option
                                key={personIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-200 dark:bg-primary-800 text-primary-500' : 'text-tertiary-950 dark:text-tertiary-50'
                                    }`
                                }
                                value={person}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {person.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500">
                                                <HiCheck className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}

export default Select