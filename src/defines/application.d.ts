/**
 * Plugin
 */
declare interface IPlugin {
    /**
     * Position insert to editor
     */
    position: string
    /**
     * React class
     */
    class: any
    /**
     * Plugin's action
     */
    actions?: {
        [name: string]: any
    }
    /**
     * Plugin's store
     */
    stores?: {
        [name: string]: any
    }
}

/**
 * Drag source's props should extends this interface
 */
declare interface IGaeaProps extends React.HTMLProps<any> {
    gaeaSetting: IGaeaSetting
}

declare interface IGaeaSetting {
    /**
     * Unique key
     */
    key: string
    /**
     * Custom show name
     */
    name: string
    /**
     * Edit infos
     */
    editors?: Array<string | IEditor>
    /**
     * Is in preview mode
     */
    isPreview?: boolean
    /**
     * Container can be dragged into component
     */
    isContainer?: boolean
    /**
     * 配置信息是否在获取中
     */
    isLoading?: boolean
    /**
     * 组件被点击时触发
     */
    onClick?: (info?: InstanceInfo) => void
    /**
     * 自定义事件
     */
    events?: ISettingEvent[]
}

declare interface IEditor {
    /**
     * Which field to control?
     * EX. text, size, user.nickname
     */
    field: string
    /**
     * Which Editor want to show?
     * Basic type like `string` `number`, or custom editor like `layout`
     */
    type: string
    /**
     * Show label
     */
    label: string
    /**
     * 当类型为非普通类型时，允许添加额外配置
     */
    editors?: IEditorOptionArray | any
}

declare type IEditorOptionArray = IEditor[]

declare interface IPage {
    /**
     * Can create a folder or page
     */
    type: "page" | "folder"
    /**
     * Is home page
     */
    isHomePage?: boolean
    /**
     * description name
     */
    name: string
    /**
     * Real path
     */
    path: string
    parentKey: string
    /**
     * Only exist in folder
     */
    childs?: string[]
}

declare interface IPages {
    [pageKey: string]: IPage
}

declare type InstancesArray = Array<{
    /**
     * The page instances belong to
     */
    pageKey: string
    instances: {
        [instanceKey: string]: InstanceInfo
    }
}>

/**
 * Page store structor
 */
declare interface IAllInformation {
    /**
     * All page info
     */
    pages: IPages
    /**
     * Root page keys
     */
    rootPageKeys: string[]
    /**
     * All instance info
     */
    instancesArray: InstancesArray
    /**
     * 用户自定义数据
     */
    persistenceData?: {
        [x: string]: any
    }
}

declare interface IPreComponent {
    /**
     * gaea Key
     */
    key: string
    /**
     * Pre-setting props
     */
    props: any
}

declare interface ISettingEvent {
    // 触发的回调函数，在 props 上名称
    trigger: string
    // 事件名称
    name: string
    data: Array<{
        // 第 index 个参数的名称
        name: string
    }>
}
