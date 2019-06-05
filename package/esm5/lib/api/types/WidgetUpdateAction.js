/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaWidget } from './KalturaWidget';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function WidgetUpdateActionArgs() { }
/** @type {?} */
WidgetUpdateActionArgs.prototype.id;
/** @type {?} */
WidgetUpdateActionArgs.prototype.widget;
/**
 * Build request payload for service 'widget' action 'update'.
 *
 * Usage: Update exisiting widget
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'widget' action 'update'.
 *
 * Usage: Update exisiting widget
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
WidgetUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(WidgetUpdateAction, _super);
    function WidgetUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaWidget', responseConstructor: KalturaWidget }) || this;
    }
    /**
     * @return {?}
     */
    WidgetUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'widget' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            widget: { type: 'o', subTypeConstructor: KalturaWidget, subType: 'KalturaWidget' }
        });
        return result;
    };
    return WidgetUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'widget' action 'update'.
 *
 * Usage: Update exisiting widget
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
export { WidgetUpdateAction };
if (false) {
    /** @type {?} */
    WidgetUpdateAction.prototype.id;
    /** @type {?} */
    WidgetUpdateAction.prototype.widget;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0VXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9XaWRnZXRVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQTZCO0lBS2pFLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGVBQWUsRUFBRSxtQkFBbUIsRUFBRyxhQUFhLEVBQUcsQ0FBQztLQUM5Rzs7OztJQUVTLHlDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBMUNMO0VBbUJ3QyxjQUFjLEVBd0JyRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsOEJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFXaWRnZXQgfSBmcm9tICcuL0thbHR1cmFXaWRnZXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG5cdHdpZGdldCA6IEthbHR1cmFXaWRnZXQ7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd3aWRnZXQnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGV4aXNpdGluZyB3aWRnZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhV2lkZ2V0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBXaWRnZXRVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhV2lkZ2V0PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0d2lkZ2V0IDogS2FsdHVyYVdpZGdldDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBXaWRnZXRVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFXaWRnZXQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVdpZGdldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnd2lkZ2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3aWRnZXQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFXaWRnZXQsIHN1YlR5cGUgOiAnS2FsdHVyYVdpZGdldCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19