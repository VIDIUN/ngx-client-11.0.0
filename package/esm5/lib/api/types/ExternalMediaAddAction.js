/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ExternalMediaAddActionArgs() { }
/** @type {?} */
ExternalMediaAddActionArgs.prototype.entry;
/**
 * Build request payload for service 'externalMedia' action 'add'.
 *
 * Usage: Add external media entry
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'externalMedia' action 'add'.
 *
 * Usage: Add external media entry
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
ExternalMediaAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ExternalMediaAddAction, _super);
    function ExternalMediaAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaExternalMediaEntry', responseConstructor: KalturaExternalMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    ExternalMediaAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'externalmedia_externalmedia' },
            action: { type: 'c', default: 'add' },
            entry: { type: 'o', subTypeConstructor: KalturaExternalMediaEntry, subType: 'KalturaExternalMediaEntry' }
        });
        return result;
    };
    return ExternalMediaAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'externalMedia' action 'add'.
 *
 * Usage: Add external media entry
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { ExternalMediaAddAction };
if (false) {
    /** @type {?} */
    ExternalMediaAddAction.prototype.entry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZXJuYWxNZWRpYUFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRXh0ZXJuYWxNZWRpYUFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUE0QyxrREFBeUM7SUFJakYsZ0NBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUcseUJBQXlCLEVBQUcsQ0FBQztLQUN0STs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQzdFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtTQUNwRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQXZDTDtFQWtCNEMsY0FBYyxFQXNCekQsQ0FBQTs7Ozs7Ozs7O0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZXJuYWxNZWRpYUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeSA6IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnk7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdleHRlcm5hbE1lZGlhJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBleHRlcm5hbCBtZWRpYSBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVybmFsTWVkaWFBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5PiB7XG5cbiAgICBlbnRyeSA6IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnk7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRXh0ZXJuYWxNZWRpYUFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdleHRlcm5hbG1lZGlhX2V4dGVybmFsbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdGVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnknIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==