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
export function WidgetGetActionArgs() { }
/** @type {?} */
WidgetGetActionArgs.prototype.id;
/**
 * Build request payload for service 'widget' action 'get'.
 *
 * Usage: Get widget by id
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'widget' action 'get'.
 *
 * Usage: Get widget by id
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
WidgetGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(WidgetGetAction, _super);
    function WidgetGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaWidget', responseConstructor: KalturaWidget }) || this;
    }
    /**
     * @return {?}
     */
    WidgetGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'widget' },
            action: { type: 'c', default: 'get' },
            id: { type: 's' }
        });
        return result;
    };
    return WidgetGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'widget' action 'get'.
 *
 * Usage: Get widget by id
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
export { WidgetGetAction };
if (false) {
    /** @type {?} */
    WidgetGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0R2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9XaWRnZXRHZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXFDLDJDQUE2QjtJQUk5RCx5QkFBWSxJQUEwQjtlQUVsQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxlQUFlLEVBQUUsbUJBQW1CLEVBQUcsYUFBYSxFQUFHLENBQUM7S0FDOUc7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQXZDTDtFQWtCcUMsY0FBYyxFQXNCbEQsQ0FBQTs7Ozs7Ozs7O0FBdEJELDJCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhV2lkZ2V0IH0gZnJvbSAnLi9LYWx0dXJhV2lkZ2V0JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0R2V0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnd2lkZ2V0JyBhY3Rpb24gJ2dldCcuXG4gKlxuICogVXNhZ2U6IEdldCB3aWRnZXQgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhV2lkZ2V0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBXaWRnZXRHZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhV2lkZ2V0PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBXaWRnZXRHZXRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFXaWRnZXQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVdpZGdldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnd2lkZ2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=