/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MixingGetMixesByMediaIdActionArgs() { }
/** @type {?} */
MixingGetMixesByMediaIdActionArgs.prototype.mediaEntryId;
/**
 * Build request payload for service 'mixing' action 'getMixesByMediaId'.
 *
 * Usage: Get the mixes in which the media entry is included
 *
 * Server response type:         KalturaMixEntry[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'mixing' action 'getMixesByMediaId'.
 *
 * Usage: Get the mixes in which the media entry is included
 *
 * Server response type:         KalturaMixEntry[]
 * Server failure response type: KalturaAPIException
 */
MixingGetMixesByMediaIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(MixingGetMixesByMediaIdAction, _super);
    function MixingGetMixesByMediaIdAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaMixEntry', responseConstructor: KalturaMixEntry }) || this;
    }
    /**
     * @return {?}
     */
    MixingGetMixesByMediaIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'mixing' },
            action: { type: 'c', default: 'getMixesByMediaId' },
            mediaEntryId: { type: 's' }
        });
        return result;
    };
    return MixingGetMixesByMediaIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'mixing' action 'getMixesByMediaId'.
 *
 * Usage: Get the mixes in which the media entry is included
 *
 * Server response type:         KalturaMixEntry[]
 * Server failure response type: KalturaAPIException
 */
export { MixingGetMixesByMediaIdAction };
if (false) {
    /** @type {?} */
    MixingGetMixesByMediaIdAction.prototype.mediaEntryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4aW5nR2V0TWl4ZXNCeU1lZGlhSWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01peGluZ0dldE1peGVzQnlNZWRpYUlkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFtRCx5REFBaUM7SUFJaEYsdUNBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDeEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEQsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXZDTDtFQWtCbUQsY0FBYyxFQXNCaEUsQ0FBQTs7Ozs7Ozs7O0FBdEJELHlDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWl4RW50cnkgfSBmcm9tICcuL0thbHR1cmFNaXhFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1peGluZ0dldE1peGVzQnlNZWRpYUlkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIG1lZGlhRW50cnlJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21peGluZycgYWN0aW9uICdnZXRNaXhlc0J5TWVkaWFJZCcuXG4gKlxuICogVXNhZ2U6IEdldCB0aGUgbWl4ZXMgaW4gd2hpY2ggdGhlIG1lZGlhIGVudHJ5IGlzIGluY2x1ZGVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1peEVudHJ5W11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1peGluZ0dldE1peGVzQnlNZWRpYUlkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU1peEVudHJ5W10+IHtcblxuICAgIG1lZGlhRW50cnlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNaXhpbmdHZXRNaXhlc0J5TWVkaWFJZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2EnLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1peEVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNaXhFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWl4aW5nJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0TWl4ZXNCeU1lZGlhSWQnIH0sXG5cdFx0XHRcdG1lZGlhRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=