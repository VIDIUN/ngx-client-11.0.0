/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SharepointExtensionIsVersionSupportedActionArgs() { }
/** @type {?} */
SharepointExtensionIsVersionSupportedActionArgs.prototype.serverMajor;
/** @type {?} */
SharepointExtensionIsVersionSupportedActionArgs.prototype.serverMinor;
/** @type {?} */
SharepointExtensionIsVersionSupportedActionArgs.prototype.serverBuild;
/**
 * Build request payload for service 'sharepointExtension' action 'isVersionSupported'.
 *
 * Usage: Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension)
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export class SharepointExtensionIsVersionSupportedAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'b', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'kalturasharepointextension_sharepointextension' },
            action: { type: 'c', default: 'isVersionSupported' },
            serverMajor: { type: 'n' },
            serverMinor: { type: 'n' },
            serverBuild: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SharepointExtensionIsVersionSupportedAction.prototype.serverMajor;
    /** @type {?} */
    SharepointExtensionIsVersionSupportedAction.prototype.serverMinor;
    /** @type {?} */
    SharepointExtensionIsVersionSupportedAction.prototype.serverBuild;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVwb2ludEV4dGVuc2lvbklzVmVyc2lvblN1cHBvcnRlZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2hhcmVwb2ludEV4dGVuc2lvbklzVmVyc2lvblN1cHBvcnRlZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSxrREFBbUQsU0FBUSxjQUF1Qjs7OztJQU1wRixZQUFZLElBQXNEO1FBRTlELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0RBQWdELEVBQUU7WUFDaEcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkQsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTaGFyZXBvaW50RXh0ZW5zaW9uSXNWZXJzaW9uU3VwcG9ydGVkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHNlcnZlck1ham9yIDogbnVtYmVyO1xuXHRzZXJ2ZXJNaW5vciA6IG51bWJlcjtcblx0c2VydmVyQnVpbGQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzaGFyZXBvaW50RXh0ZW5zaW9uJyBhY3Rpb24gJ2lzVmVyc2lvblN1cHBvcnRlZCcuXG4gKlxuICogVXNhZ2U6IElzIHRoaXMgS2FsdHVyYS1TaGFyZXBvaW50LVNlcnZlci1QbHVnaW4gc3VwcG9ydHMgbWluaW11bSB2ZXJzaW9uIG9mICRtYWpvci4kbWlub3IuJGJ1aWxkICh3aGljaCBpcyByZXF1aXJlZCBieSB0aGUgZXh0ZW5zaW9uKVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIGJvb2xlYW5cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNoYXJlcG9pbnRFeHRlbnNpb25Jc1ZlcnNpb25TdXBwb3J0ZWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxib29sZWFuPiB7XG5cbiAgICBzZXJ2ZXJNYWpvciA6IG51bWJlcjtcblx0c2VydmVyTWlub3IgOiBudW1iZXI7XG5cdHNlcnZlckJ1aWxkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNoYXJlcG9pbnRFeHRlbnNpb25Jc1ZlcnNpb25TdXBwb3J0ZWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdiJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2thbHR1cmFzaGFyZXBvaW50ZXh0ZW5zaW9uX3NoYXJlcG9pbnRleHRlbnNpb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpc1ZlcnNpb25TdXBwb3J0ZWQnIH0sXG5cdFx0XHRcdHNlcnZlck1ham9yIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlcnZlck1pbm9yIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlcnZlckJ1aWxkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==