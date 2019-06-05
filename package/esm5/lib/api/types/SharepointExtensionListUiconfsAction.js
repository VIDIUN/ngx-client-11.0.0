/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SharepointExtensionListUiconfsActionArgs() { }
/**
 * Build request payload for service 'sharepointExtension' action 'listUiconfs'.
 *
 * Usage: list uiconfs for sharepoint extension
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'sharepointExtension' action 'listUiconfs'.
 *
 * Usage: list uiconfs for sharepoint extension
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 */
SharepointExtensionListUiconfsAction = /** @class */ (function (_super) {
    tslib_1.__extends(SharepointExtensionListUiconfsAction, _super);
    function SharepointExtensionListUiconfsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUiConfListResponse', responseConstructor: KalturaUiConfListResponse }) || this;
    }
    /**
     * @return {?}
     */
    SharepointExtensionListUiconfsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'kalturasharepointextension_sharepointextension' },
            action: { type: 'c', default: 'listUiconfs' }
        });
        return result;
    };
    return SharepointExtensionListUiconfsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'sharepointExtension' action 'listUiconfs'.
 *
 * Usage: list uiconfs for sharepoint extension
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 */
export { SharepointExtensionListUiconfsAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVwb2ludEV4dGVuc2lvbkxpc3RVaWNvbmZzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TaGFyZXBvaW50RXh0ZW5zaW9uTGlzdFVpY29uZnNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV4RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTBELGdFQUF5QztJQUkvRiw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRyx5QkFBeUIsRUFBRyxDQUFDO0tBQ3RJOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0RBQWdELEVBQUU7WUFDaEcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1NBQ3ZDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBdENMO0VBa0IwRCxjQUFjLEVBcUJ2RSxDQUFBOzs7Ozs7Ozs7QUFyQkQsZ0RBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVaUNvbmZMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFVaUNvbmZMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTaGFyZXBvaW50RXh0ZW5zaW9uTGlzdFVpY29uZnNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgXG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzaGFyZXBvaW50RXh0ZW5zaW9uJyBhY3Rpb24gJ2xpc3RVaWNvbmZzJy5cbiAqXG4gKiBVc2FnZTogbGlzdCB1aWNvbmZzIGZvciBzaGFyZXBvaW50IGV4dGVuc2lvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVaUNvbmZMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNoYXJlcG9pbnRFeHRlbnNpb25MaXN0VWljb25mc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVaUNvbmZMaXN0UmVzcG9uc2U+IHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBTaGFyZXBvaW50RXh0ZW5zaW9uTGlzdFVpY29uZnNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFVaUNvbmZMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVpQ29uZkxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAna2FsdHVyYXNoYXJlcG9pbnRleHRlbnNpb25fc2hhcmVwb2ludGV4dGVuc2lvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3RVaWNvbmZzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=