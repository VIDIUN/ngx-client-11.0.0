/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUiConf } from './KalturaUiConf';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UiConfUpdateActionArgs() { }
/** @type {?} */
UiConfUpdateActionArgs.prototype.id;
/** @type {?} */
UiConfUpdateActionArgs.prototype.uiConf;
/**
 * Build request payload for service 'uiConf' action 'update'.
 *
 * Usage: Update an existing UIConf
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'uiConf' action 'update'.
 *
 * Usage: Update an existing UIConf
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
UiConfUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(UiConfUpdateAction, _super);
    function UiConfUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUiConf', responseConstructor: KalturaUiConf }) || this;
    }
    /**
     * @return {?}
     */
    UiConfUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uiconf' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            uiConf: { type: 'o', subTypeConstructor: KalturaUiConf, subType: 'KalturaUiConf' }
        });
        return result;
    };
    return UiConfUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'uiConf' action 'update'.
 *
 * Usage: Update an existing UIConf
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
export { UiConfUpdateAction };
if (false) {
    /** @type {?} */
    UiConfUpdateAction.prototype.id;
    /** @type {?} */
    UiConfUpdateAction.prototype.uiConf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVWlDb25mVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9VaUNvbmZVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQTZCO0lBS2pFLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGVBQWUsRUFBRSxtQkFBbUIsRUFBRyxhQUFhLEVBQUcsQ0FBQztLQUM5Rzs7OztJQUVTLHlDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBMUNMO0VBbUJ3QyxjQUFjLEVBd0JyRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsOEJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVaUNvbmYgfSBmcm9tICcuL0thbHR1cmFVaUNvbmYnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVaUNvbmZVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdHVpQ29uZiA6IEthbHR1cmFVaUNvbmY7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1aUNvbmYnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFuIGV4aXN0aW5nIFVJQ29uZlxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVaUNvbmZcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVpQ29uZlVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVaUNvbmY+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHR1aUNvbmYgOiBLYWx0dXJhVWlDb25mO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVpQ29uZlVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVpQ29uZicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVWlDb25mICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1aWNvbmYnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVpQ29uZiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVpQ29uZiwgc3ViVHlwZSA6ICdLYWx0dXJhVWlDb25mJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=