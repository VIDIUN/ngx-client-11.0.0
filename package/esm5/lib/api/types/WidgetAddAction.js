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
export function WidgetAddActionArgs() { }
/** @type {?} */
WidgetAddActionArgs.prototype.widget;
/**
 * Build request payload for service 'widget' action 'add'.
 *
 * Usage: Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'widget' action 'add'.
 *
 * Usage: Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
WidgetAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(WidgetAddAction, _super);
    function WidgetAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaWidget', responseConstructor: KalturaWidget }) || this;
    }
    /**
     * @return {?}
     */
    WidgetAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'widget' },
            action: { type: 'c', default: 'add' },
            widget: { type: 'o', subTypeConstructor: KalturaWidget, subType: 'KalturaWidget' }
        });
        return result;
    };
    return WidgetAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'widget' action 'add'.
 *
 * Usage: Add new widget, can be attached to entry or kshow
 * SourceWidget is ignored
 *
 * Server response type:         KalturaWidget
 * Server failure response type: KalturaAPIException
 */
export { WidgetAddAction };
if (false) {
    /** @type {?} */
    WidgetAddAction.prototype.widget;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2lkZ2V0QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9XaWRnZXRBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7O0FBQUE7SUFBcUMsMkNBQTZCO0lBSTlELHlCQUFZLElBQTBCO2VBRWxDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGVBQWUsRUFBRSxtQkFBbUIsRUFBRyxhQUFhLEVBQUcsQ0FBQztLQUM5Rzs7OztJQUVTLHNDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUN4RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtTQUM3RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQXhDTDtFQW1CcUMsY0FBYyxFQXNCbEQsQ0FBQTs7Ozs7Ozs7OztBQXRCRCwyQkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVdpZGdldCB9IGZyb20gJy4vS2FsdHVyYVdpZGdldCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldEFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB3aWRnZXQgOiBLYWx0dXJhV2lkZ2V0O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnd2lkZ2V0JyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgd2lkZ2V0LCBjYW4gYmUgYXR0YWNoZWQgdG8gZW50cnkgb3Iga3Nob3dcbiAqIFNvdXJjZVdpZGdldCBpcyBpZ25vcmVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVdpZGdldFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgV2lkZ2V0QWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVdpZGdldD4ge1xuXG4gICAgd2lkZ2V0IDogS2FsdHVyYVdpZGdldDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBXaWRnZXRBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFXaWRnZXQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVdpZGdldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnd2lkZ2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHR3aWRnZXQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFXaWRnZXQsIHN1YlR5cGUgOiAnS2FsdHVyYVdpZGdldCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19