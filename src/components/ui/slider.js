// components
import * as SliderRoot from "@radix-ui/react-slider";

const Slider = ({
  defaultValue,
  min = 0,
  max = 100,
  value,
  onChange = () => {},
  step,
  ariaLabel = "",
}) => {
  return (
    <SliderRoot.Root
      defaultValue={[defaultValue]}
      min={min}
      max={max}
      step={step}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      className="relative flex w-full items-center"
    >
      <SliderRoot.Track className="relative h-0.5 flex-1 rounded-full bg-tertiary-200 dark:bg-tertiary-700">
        <SliderRoot.Range className="absolute h-0.5 rounded-full bg-tertiary-900 dark:bg-tertiary-100" />
      </SliderRoot.Track>
      <SliderRoot.Thumb className="block h-3 w-3 rounded-full bg-tertiary-950 dark:bg-tertiary-50" />
    </SliderRoot.Root>
  );
};

export default Slider;
