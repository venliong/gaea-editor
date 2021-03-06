import { StoreProps } from "../../stores"

export class Props extends StoreProps<void, void> {
  /**
   * injected
   */
  public editor?: IEditor
  /**
   * injected
   */
  public totalFields?: string[]
  /**
   * injected
   */
  public realField?: string
}

export class State { }
