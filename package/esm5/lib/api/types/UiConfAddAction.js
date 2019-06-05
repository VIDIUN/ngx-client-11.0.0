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
export function UiConfAddActionArgs() { }
/** @type {?} */
UiConfAddActionArgs.prototype.uiConf;
/**
 * Build request payload for service 'uiConf' action 'add'.
 *
 * Usage: UIConf Add action allows you to add a UIConf to Kaltura DB
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'uiConf' action 'add'.
 *
 * Usage: UIConf Add action allows you to add a UIConf to Kaltura DB
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
UiConfAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(UiConfAddAction, _super);
    function UiConfAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUiConf', responseConstructor: KalturaUiConf }) || this;
    }
    /**
     * @return {?}
     */
    UiConfAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uiconf' },
            action: { type: 'c', default: 'add' },
            uiConf: { type: 'o', subTypeConstructor: KalturaUiConf, subType: 'KalturaUiConf' }
        });
        return result;
    };
    return UiConfAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'uiConf' action 'add'.
 *
 * Usage: UIConf Add action allows you to add a UIConf to Kaltura DB
 *
 * Server response type:         KalturaUiConf
 * Server failure response type: KalturaAPIException
 */
export { UiConfAddAction };
if (false) {
    /** @type {?} */
    UiConfAddAction.prototype.uiConf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVWlDb25mQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9VaUNvbmZBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXFDLDJDQUE2QjtJQUk5RCx5QkFBWSxJQUEwQjtlQUVsQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxlQUFlLEVBQUUsbUJBQW1CLEVBQUcsYUFBYSxFQUFHLENBQUM7S0FDOUc7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7U0FDN0UsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQkF2Q0w7RUFrQnFDLGNBQWMsRUFzQmxELENBQUE7Ozs7Ozs7OztBQXRCRCwyQkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVpQ29uZiB9IGZyb20gJy4vS2FsdHVyYVVpQ29uZic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVpQ29uZkFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB1aUNvbmYgOiBLYWx0dXJhVWlDb25mO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndWlDb25mJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IFVJQ29uZiBBZGQgYWN0aW9uIGFsbG93cyB5b3UgdG8gYWRkIGEgVUlDb25mIHRvIEthbHR1cmEgREJcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVWlDb25mXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBVaUNvbmZBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhVWlDb25mPiB7XG5cbiAgICB1aUNvbmYgOiBLYWx0dXJhVWlDb25mO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFVpQ29uZkFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVVpQ29uZicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVWlDb25mICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1aWNvbmYnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHVpQ29uZiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVpQ29uZiwgc3ViVHlwZSA6ICdLYWx0dXJhVWlDb25mJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=