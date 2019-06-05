/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaUiConfTypeInfo } from './KalturaUiConfTypeInfo';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UiConfGetAvailableTypesActionArgs() { }
/**
 * Build request payload for service 'uiConf' action 'getAvailableTypes'.
 *
 * Usage: Retrieve a list of all available versions by object type
 *
 * Server response type:         KalturaUiConfTypeInfo[]
 * Server failure response type: KalturaAPIException
 */
export class UiConfGetAvailableTypesAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'a', responseSubType: 'KalturaUiConfTypeInfo', responseConstructor: KalturaUiConfTypeInfo });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uiconf' },
            action: { type: 'c', default: 'getAvailableTypes' }
        });
        return result;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVWlDb25mR2V0QXZhaWxhYmxlVHlwZXNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1VpQ29uZkdldEF2YWlsYWJsZVR5cGVzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBY3hFLE1BQU0sb0NBQXFDLFNBQVEsY0FBdUM7Ozs7SUFJdEYsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUcscUJBQXFCLEVBQUcsQ0FBQyxDQUFDO0tBQy9IOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDN0MsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVaUNvbmZUeXBlSW5mbyB9IGZyb20gJy4vS2FsdHVyYVVpQ29uZlR5cGVJbmZvJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVWlDb25mR2V0QXZhaWxhYmxlVHlwZXNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgXG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1aUNvbmYnIGFjdGlvbiAnZ2V0QXZhaWxhYmxlVHlwZXMnLlxuICpcbiAqIFVzYWdlOiBSZXRyaWV2ZSBhIGxpc3Qgb2YgYWxsIGF2YWlsYWJsZSB2ZXJzaW9ucyBieSBvYmplY3QgdHlwZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVaUNvbmZUeXBlSW5mb1tdXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVaUNvbmZHZXRBdmFpbGFibGVUeXBlc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVaUNvbmZUeXBlSW5mb1tdPiB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogVWlDb25mR2V0QXZhaWxhYmxlVHlwZXNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdhJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFVaUNvbmZUeXBlSW5mbycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVWlDb25mVHlwZUluZm8gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VpY29uZicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEF2YWlsYWJsZVR5cGVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=