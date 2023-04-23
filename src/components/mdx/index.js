// mdx ui components
import GithubButton from "@/components/mdx/ui/githubButton";
import CodeBlock from "@/components/mdx/ui/codeBlock";
import TableProp from "@/components/mdx/ui/tableProp";
import NoWrap from "@/components/mdx/ui/noWrap";

// mdx demonstration components
import ButtonDemonstration from "@/components/mdx/demonstration/buttonDemonstration";
import CheckboxDemonstration from "@/components/mdx/demonstration/checkboxDemonstration";
import DrawerDemonstration from "@/components/mdx/demonstration/drawerDemonstration";
import ErrorDemonstration from "@/components/mdx/demonstration/errorDemonstration";
import IconButtonDemonstration from "@/components/mdx/demonstration/iconButtonDemonstration";
import InputDemonstration from "@/components/mdx/demonstration/inputDemonstration";
import ModalDemonstration from "@/components/mdx/demonstration/modalDemonstration";
import PaginationDemonstration from "@/components/mdx/demonstration/paginationDemonstration";
import PopoverDemonstration from "@/components/mdx/demonstration/popoverDemonstration";
import RadioGroupDemonstration from "@/components/mdx/demonstration/radioGroupDemonstration";
import SelectDemonstration from "@/components/mdx/demonstration/selectDemonstration";
import SliderDemonstration from "@/components/mdx/demonstration/sliderDemonstration";
import SwitchDemonstration from "@/components/mdx/demonstration/switchDemonstration";
import TableDemonstration from "@/components/mdx/demonstration/tableDemonstration";
import TabsDemonstration from "@/components/mdx/demonstration/tabsDemonstration";
import ToastDemonstration from "@/components/mdx/demonstration/toastDemonstration";
import ToggleDemonstration from "@/components/mdx/demonstration/toggleDemonstration";

const allMDXComponents = {
  code: (props) => (
    <code
      className="rounded-md bg-tertiary-100 px-2 py-1 shadow before:hidden after:hidden dark:bg-tertiary-800"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="border-b border-tertiary-200 pb-2 dark:border-tertiary-700"
      {...props}
    />
  ),
  // components
  GithubButton,
  CodeBlock,
  TableProp,
  NoWrap,

  // demonstration
  ButtonDemonstration,
  CheckboxDemonstration,
  DrawerDemonstration,
  ErrorDemonstration,
  IconButtonDemonstration,
  InputDemonstration,
  ModalDemonstration,
  PopoverDemonstration,
  PaginationDemonstration,
  RadioGroupDemonstration,
  SelectDemonstration,
  SliderDemonstration,
  SwitchDemonstration,
  TableDemonstration,
  TabsDemonstration,
  ToastDemonstration,
  ToggleDemonstration
};

export default allMDXComponents;
