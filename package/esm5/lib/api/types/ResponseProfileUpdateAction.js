/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ResponseProfileUpdateActionArgs() { }
/** @type {?} */
ResponseProfileUpdateActionArgs.prototype.id;
/** @type {?} */
ResponseProfileUpdateActionArgs.prototype.updateResponseProfile;
/**
 * Build request payload for service 'responseProfile' action 'update'.
 *
 * Usage: Update response profile by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'responseProfile' action 'update'.
 *
 * Usage: Update response profile by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
ResponseProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ResponseProfileUpdateAction, _super);
    function ResponseProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaResponseProfile', responseConstructor: KalturaResponseProfile }) || this;
    }
    /**
     * @return {?}
     */
    ResponseProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'responseprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            updateResponseProfile: { type: 'o', subTypeConstructor: KalturaResponseProfile, subType: 'KalturaResponseProfile' }
        });
        return result;
    };
    return ResponseProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'responseProfile' action 'update'.
 *
 * Usage: Update response profile by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export { ResponseProfileUpdateAction };
if (false) {
    /** @type {?} */
    ResponseProfileUpdateAction.prototype.id;
    /** @type {?} */
    ResponseProfileUpdateAction.prototype.updateResponseProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VQcm9maWxlVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXNwb25zZVByb2ZpbGVVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBc0M7SUFLbkYscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDOUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0ExQ0w7RUFtQmlELGNBQWMsRUF3QjlELENBQUE7Ozs7Ozs7OztBQXhCRCx1Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0dXBkYXRlUmVzcG9uc2VQcm9maWxlIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Jlc3BvbnNlUHJvZmlsZScgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgcmVzcG9uc2UgcHJvZmlsZSBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFSZXNwb25zZVByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlUHJvZmlsZVVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFSZXNwb25zZVByb2ZpbGU+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHR1cGRhdGVSZXNwb25zZVByb2ZpbGUgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFJlc3BvbnNlUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUmVzcG9uc2VQcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXNwb25zZXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwZGF0ZVJlc3BvbnNlUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=