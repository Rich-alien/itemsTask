export interface ItemsDto{
  "active"?: number;
  "active_polling"?: boolean;
  "address"?: Array<string>;
  "archived_at"?: null;
  "attributes"?: Array<any>
  "company_creator_id"?: number;
  "created_at"?: number;
  "creator_id"?: number;
  "deleted_at"?: null;
  "desc"?: null;
  "deviceID"?: string;
  "deviceTimezone"?: number;
  "device_group_id"?: number;
  "device_type_id"?: number;
  "gatewayID"?: string;
  "gateway_id"?: number;
  "id"?: number;
  "impulse_weight"?: string;
  "inside_addr"?: string;
  "interface_id"?: number;
  "last_active"?: number;
  "last_message"?: Object;
  "last_message_type"?: Object;
  "model_class_id"?: number;
  "model_id"?: number;
  "name"?: string;
  "on_dashboard"?: boolean;
  "port_addr"?: string;
  "properties"?: Object;
  "protocol_id"?: number;
  "report_period_update"?: number
  "starting_value"?: string
  "status"?: null;
  "tied_point"?: null;
  "transformation_ratio"?: null;
  "updated_at"?: number;
}
