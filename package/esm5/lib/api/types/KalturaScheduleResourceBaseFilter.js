/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceStatus } from './KalturaScheduleResourceStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaScheduleResourceBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaScheduleResourceBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
var KalturaScheduleResourceBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleResourceBaseFilter, _super);
    function KalturaScheduleResourceBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleResourceBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduleResourceBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            parentIdEqual: { type: 'n' },
            parentIdIn: { type: 's' },
            nameEqual: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaScheduleResourceStatus, subType: 'KalturaScheduleResourceStatus' },
            statusIn: { type: 's' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaScheduleResourceBaseFilter;
}(KalturaRelatedFilter));
export { KalturaScheduleResourceBaseFilter };
if (false) {
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaScheduleResourceBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaScheduleResourceBaseFilter'] = KalturaScheduleResourceBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnhGLElBQUE7SUFBdUQsNkRBQW9CO0lBb0J2RSwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDZCQUE2QixFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUM1SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBOUVMO0VBMEJ1RCxvQkFBb0IsRUFxRDFFLENBQUE7QUFyREQsNkNBcURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGlkTm90SW4/IDogc3RyaW5nO1xuXHRwYXJlbnRJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFyZW50SWRJbj8gOiBzdHJpbmc7XG5cdG5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFTY2hlZHVsZVJlc291cmNlU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHRhZ3NMaWtlPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRpZE5vdEluIDogc3RyaW5nO1xuXHRwYXJlbnRJZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJlbnRJZEluIDogc3RyaW5nO1xuXHRuYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFTY2hlZHVsZVJlc291cmNlU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0dGFnc0xpa2UgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyZW50SWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJlbnRJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2VTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFTY2hlZHVsZVJlc291cmNlQmFzZUZpbHRlcjsiXX0=