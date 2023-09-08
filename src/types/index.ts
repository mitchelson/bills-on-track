import { DefaultTheme } from "styled-components";

export interface User {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

export type MonthlyFinanceProps = {
  month?: string;
  expectedBalance: number;
  expectedRevenue: number;
  monthlyExpenses: number;
};

export type IconsProps = {
  color?: string;
  style?: DefaultTheme;
  name:
  "ArrowDownLeftIcon" |
  "ArrowDownOnSquareStackIcon" |
  "ArrowDownOnSquareIcon" |
  "ArrowDownRightIcon" |
  "ArrowDownTrayIcon" |
  "ArrowDownIcon" |
  "ArrowLeftCircleIcon" |
  "ArrowLeftOnRectangleIcon" |
  "ArrowLeftIcon" |
  "ArrowLongDownIcon" |
  "ArrowLongLeftIcon" |
  "ArrowLongRightIcon" |
  "ArrowLongUpIcon" |
  "ArrowPathRoundedSquareIcon" |
  "ArrowPathIcon" |
  "ArrowRightCircleIcon" |
  "ArrowRightOnRectangleIcon" |
  "ArrowRightIcon" |
  "ArrowSmallDownIcon" |
  "ArrowSmallLeftIcon" |
  "ArrowSmallRightIcon" |
  "ArrowSmallUpIcon" |
  "ArrowTopRightOnSquareIcon" |
  "ArrowTrendingDownIcon" |
  "ArrowTrendingUpIcon" |
  "ArrowUpCircleIcon" |
  "ArrowUpLeftIcon" |
  "ArrowUpOnSquareStackIcon" |
  "ArrowUpOnSquareIcon" |
  "ArrowUpRightIcon" |
  "ArrowUpTrayIcon" |
  "ArrowUpIcon" |
  "ArrowUturnDownIcon" |
  "ArrowUturnLeftIcon" |
  "ArrowUturnRightIcon" |
  "ArrowUturnUpIcon" |
  "ArrowsPointingInIcon" |
  "ArrowsPointingOutIcon" |
  "ArrowsRightLeftIcon" |
  "ArrowsUpDownIcon" |
  "AtSymbolIcon" |
  "BackspaceIcon" |
  "BackwardIcon" |
  "BanknotesIcon" |
  "Bars2Icon" |
  "Bars3BottomLeftIcon" |
  "Bars3BottomRightIcon" |
  "Bars3CenterLeftIcon" |
  "Bars3Icon" |
  "Bars4Icon" |
  "BarsArrowDownIcon" |
  "BarsArrowUpIcon" |
  "Battery0Icon" |
  "Battery100Icon" |
  "Battery50Icon" |
  "BeakerIcon" |
  "BellAlertIcon" |
  "BellSlashIcon" |
  "BellSnoozeIcon" |
  "BellIcon" |
  "BoltSlashIcon" |
  "BoltIcon" |
  "BookOpenIcon" |
  "BookmarkSlashIcon" |
  "BookmarkSquareIcon" |
  "BookmarkIcon" |
  "BriefcaseIcon" |
  "BugAntIcon" |
  "BuildingLibraryIcon" |
  "BuildingOffice2Icon" |
  "BuildingOfficeIcon" |
  "BuildingStorefrontIcon" |
  "CakeIcon" |
  "CalculatorIcon" |
  "CalendarDaysIcon" |
  "CalendarIcon" |
  "CameraIcon" |
  "ChartBarSquareIcon" |
  "ChartBarIcon" |
  "ChartPieIcon" |
  "ChatBubbleBottomCenterTextIcon" |
  "ChatBubbleBottomCenterIcon" |
  "ChatBubbleLeftEllipsisIcon" |
  "ChatBubbleLeftRightIcon" |
  "ChatBubbleLeftIcon" |
  "ChatBubbleOvalLeftEllipsisIcon" |
  "ChatBubbleOvalLeftIcon" |
  "CheckBadgeIcon" |
  "CheckCircleIcon" |
  "CheckIcon" |
  "ChevronDoubleDownIcon" |
  "ChevronDoubleLeftIcon" |
  "ChevronDoubleRightIcon" |
  "ChevronDoubleUpIcon" |
  "ChevronDownIcon" |
  "ChevronLeftIcon" |
  "ChevronRightIcon" |
  "ChevronUpDownIcon" |
  "ChevronUpIcon" |
  "CircleStackIcon" |
  "ClipboardDocumentCheckIcon" |
  "ClipboardDocumentListIcon" |
  "ClipboardDocumentIcon" |
  "ClipboardIcon" |
  "ClockIcon" |
  "CloudArrowDownIcon" |
  "CloudArrowUpIcon" |
  "CloudIcon" |
  "CodeBracketSquareIcon" |
  "CodeBracketIcon" |
  "Cog6ToothIcon" |
  "Cog8ToothIcon" |
  "CogIcon" |
  "CommandLineIcon" |
  "ComputerDesktopIcon" |
  "CpuChipIcon" |
  "CreditCardIcon" |
  "CubeTransparentIcon" |
  "CubeIcon" |
  "CurrencyBangladeshiIcon" |
  "CurrencyDollarIcon" |
  "CurrencyEuroIcon" |
  "CurrencyPoundIcon" |
  "CurrencyRupeeIcon" |
  "CurrencyYenIcon" |
  "CursorArrowRaysIcon" |
  "CursorArrowRippleIcon" |
  "DevicePhoneMobileIcon" |
  "DeviceTabletIcon" |
  "DocumentArrowDownIcon" |
  "DocumentArrowUpIcon" |
  "DocumentChartBarIcon" |
  "DocumentCheckIcon" |
  "DocumentDuplicateIcon" |
  "DocumentMagnifyingGlassIcon" |
  "DocumentMinusIcon" |
  "DocumentPlusIcon" |
  "DocumentTextIcon" |
  "DocumentIcon" |
  "EllipsisHorizontalCircleIcon" |
  "EllipsisHorizontalIcon" |
  "EllipsisVerticalIcon" |
  "EnvelopeOpenIcon" |
  "EnvelopeIcon" |
  "ExclamationCircleIcon" |
  "ExclamationTriangleIcon" |
  "EyeDropperIcon" |
  "EyeSlashIcon" |
  "EyeIcon" |
  "FaceFrownIcon" |
  "FaceSmileIcon" |
  "FilmIcon" |
  "FingerPrintIcon" |
  "FireIcon" |
  "FlagIcon" |
  "FolderArrowDownIcon" |
  "FolderMinusIcon" |
  "FolderOpenIcon" |
  "FolderPlusIcon" |
  "FolderIcon" |
  "ForwardIcon" |
  "FunnelIcon" |
  "GifIcon" |
  "GiftTopIcon" |
  "GiftIcon" |
  "GlobeAltIcon" |
  "GlobeAmericasIcon" |
  "GlobeAsiaAustraliaIcon" |
  "GlobeEuropeAfricaIcon" |
  "HandRaisedIcon" |
  "HandThumbDownIcon" |
  "HandThumbUpIcon" |
  "HashtagIcon" |
  "HeartIcon" |
  "HomeModernIcon" |
  "HomeIcon" |
  "IdentificationIcon" |
  "InboxArrowDownIcon" |
  "InboxStackIcon" |
  "InboxIcon" |
  "InformationCircleIcon" |
  "KeyIcon" |
  "LanguageIcon" |
  "LifebuoyIcon" |
  "LightBulbIcon" |
  "LinkIcon" |
  "ListBulletIcon" |
  "LockClosedIcon" |
  "LockOpenIcon" |
  "MagnifyingGlassCircleIcon" |
  "MagnifyingGlassMinusIcon" |
  "MagnifyingGlassPlusIcon" |
  "MagnifyingGlassIcon" |
  "MapPinIcon" |
  "MapIcon" |
  "MegaphoneIcon" |
  "MicrophoneIcon" |
  "MinusCircleIcon" |
  "MinusSmallIcon" |
  "MinusIcon" |
  "MoonIcon" |
  "MusicalNoteIcon" |
  "NewspaperIcon" |
  "NoSymbolIcon" |
  "PaintBrushIcon" |
  "PaperAirplaneIcon" |
  "PaperClipIcon" |
  "PauseCircleIcon" |
  "PauseIcon" |
  "PencilSquareIcon" |
  "PencilIcon" |
  "PhoneArrowDownLeftIcon" |
  "PhoneArrowUpRightIcon" |
  "PhoneXMarkIcon" |
  "PhoneIcon" |
  "PhotoIcon" |
  "PlayCircleIcon" |
  "PlayPauseIcon" |
  "PlayIcon" |
  "PlusCircleIcon" |
  "PlusSmallIcon" |
  "PlusIcon" |
  "PowerIcon" |
  "PresentationChartBarIcon" |
  "PresentationChartLineIcon" |
  "PrinterIcon" |
  "PuzzlePieceIcon" |
  "QrCodeIcon" |
  "QuestionMarkCircleIcon" |
  "QueueListIcon" |
  "RadioIcon" |
  "ReceiptPercentIcon" |
  "ReceiptRefundIcon" |
  "RectangleGroupIcon" |
  "RectangleStackIcon" |
  "RocketLaunchIcon" |
  "RssIcon" |
  "ScaleIcon" |
  "ScissorsIcon" |
  "ServerStackIcon" |
  "ServerIcon" |
  "ShareIcon" |
  "ShieldCheckIcon" |
  "ShieldExclamationIcon" |
  "ShoppingBagIcon" |
  "ShoppingCartIcon" |
  "SignalSlashIcon" |
  "SignalIcon" |
  "SparklesIcon" |
  "SpeakerWaveIcon" |
  "SpeakerXMarkIcon" |
  "Square2StackIcon" |
  "Square3Stack3DIcon" |
  "Squares2X2Icon" |
  "SquaresPlusIcon" |
  "StarIcon" |
  "StopCircleIcon" |
  "StopIcon" |
  "SunIcon" |
  "SwatchIcon" |
  "TableCellsIcon" |
  "TagIcon" |
  "TicketIcon" |
  "TrashIcon" |
  "TrophyIcon" |
  "TruckIcon" |
  "TvIcon" |
  "UserCircleIcon" |
  "UserGroupIcon" |
  "UserMinusIcon" |
  "UserPlusIcon" |
  "UserIcon" |
  "UsersIcon" |
  "VariableIcon" |
  "VideoCameraSlashIcon" |
  "VideoCameraIcon" |
  "ViewColumnsIcon" |
  "ViewfinderCircleIcon" |
  "WalletIcon" |
  "WifiIcon" |
  "WindowIcon" |
  "WrenchScrewdriverIcon" |
  "WrenchIcon" |
  "XCircleIcon" |
  "XMarkIcon";
};

export type BillDTO = {
  id: string; // id da transação
  name: string; // nome da transação, ex: conta de luz
  type: "outcome" | "income"; // tipo da transação
  value: number; // valor da transação em centavos
  description?: string; // descrição
  categoryId: string; // categoria
  isRecurringPayment?: boolean | null; // caso seja um pagamento recorrente
  frequencyInterval?: string; // frequencia do pagamento recorrente
  installments?: number; // quantidade de parcelas do pagamento recorrente
  paymentDate: string; // data de efetivação da transação
  status?: string; // status da transação
  createdAt: string; // data da criação do transação
  updatedAt?: string; // data da atualização da transação
  monthTransaction: string;
};

export type StateTransactions = {
  transactions: BillDTO[];
  currentBalance: number;
};
