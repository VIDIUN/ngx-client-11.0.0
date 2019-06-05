/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaServerNodeBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.heartbeatTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.heartbeatTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.nameIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.hostNameLike;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.hostNameMultiLikeOr;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.hostNameMultiLikeAnd;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.dcEqual;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.dcIn;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.parentIdLike;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.parentIdMultiLikeOr;
/** @type {?|undefined} */
KalturaServerNodeBaseFilterArgs.prototype.parentIdMultiLikeAnd;
var KalturaServerNodeBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaServerNodeBaseFilter, _super);
    function KalturaServerNodeBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaServerNodeBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaServerNodeBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            heartbeatTimeGreaterThanOrEqual: { type: 'd' },
            heartbeatTimeLessThanOrEqual: { type: 'd' },
            nameEqual: { type: 's' },
            nameIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            hostNameLike: { type: 's' },
            hostNameMultiLikeOr: { type: 's' },
            hostNameMultiLikeAnd: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaServerNodeStatus, subType: 'KalturaServerNodeStatus' },
            statusIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaServerNodeType, subType: 'KalturaServerNodeType' },
            typeIn: { type: 's' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            dcEqual: { type: 'n' },
            dcIn: { type: 's' },
            parentIdLike: { type: 's' },
            parentIdMultiLikeOr: { type: 's' },
            parentIdMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaServerNodeBaseFilter;
}(KalturaFilter));
export { KalturaServerNodeBaseFilter };
if (false) {
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.heartbeatTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.heartbeatTimeLessThanOrEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.nameIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.hostNameLike;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.hostNameMultiLikeOr;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.hostNameMultiLikeAnd;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.dcEqual;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.dcIn;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.parentIdLike;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.parentIdMultiLikeOr;
    /** @type {?} */
    KalturaServerNodeBaseFilter.prototype.parentIdMultiLikeAnd;
}
typesMappingStorage['KalturaServerNodeBaseFilter'] = KalturaServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlcnZlck5vZGVCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2VydmVyTm9kZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ25FLElBQUE7SUFBaUQsdURBQWE7SUE4QjFELHFDQUFZLElBQXVDO2VBRS9DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywrQkFBK0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEQsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ2hILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0E3R0w7RUFxQ2lELGFBQWEsRUF5RTdELENBQUE7QUF6RUQsdUNBeUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU2VydmVyTm9kZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU2VydmVyTm9kZVR5cGUgfSBmcm9tICcuL0thbHR1cmFTZXJ2ZXJOb2RlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNlcnZlck5vZGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0aGVhcnRiZWF0VGltZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRoZWFydGJlYXRUaW1lTGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdG5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdG5hbWVJbj8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG5cdGhvc3ROYW1lTGlrZT8gOiBzdHJpbmc7XG5cdGhvc3ROYW1lTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRob3N0TmFtZU11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFTZXJ2ZXJOb2RlU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHR5cGVFcXVhbD8gOiBLYWx0dXJhU2VydmVyTm9kZVR5cGU7XG5cdHR5cGVJbj8gOiBzdHJpbmc7XG5cdHRhZ3NMaWtlPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGRjRXF1YWw/IDogbnVtYmVyO1xuXHRkY0luPyA6IHN0cmluZztcblx0cGFyZW50SWRMaWtlPyA6IHN0cmluZztcblx0cGFyZW50SWRNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHBhcmVudElkTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNlcnZlck5vZGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRoZWFydGJlYXRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0aGVhcnRiZWF0VGltZUxlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdG5hbWVFcXVhbCA6IHN0cmluZztcblx0bmFtZUluIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lRXF1YWwgOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbiA6IHN0cmluZztcblx0aG9zdE5hbWVMaWtlIDogc3RyaW5nO1xuXHRob3N0TmFtZU11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRob3N0TmFtZU11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhU2VydmVyTm9kZVN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHR5cGVFcXVhbCA6IEthbHR1cmFTZXJ2ZXJOb2RlVHlwZTtcblx0dHlwZUluIDogc3RyaW5nO1xuXHR0YWdzTGlrZSA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRkY0VxdWFsIDogbnVtYmVyO1xuXHRkY0luIDogc3RyaW5nO1xuXHRwYXJlbnRJZExpa2UgOiBzdHJpbmc7XG5cdHBhcmVudElkTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHBhcmVudElkTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2VydmVyTm9kZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlcnZlck5vZGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGhlYXJ0YmVhdFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0aGVhcnRiZWF0VGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRuYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdE5hbWVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhvc3ROYW1lTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aG9zdE5hbWVNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VydmVyTm9kZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhU2VydmVyTm9kZVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZXJ2ZXJOb2RlVHlwZScgfSxcblx0XHRcdFx0dHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRjRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRJZExpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyZW50SWRNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRJZE11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2VydmVyTm9kZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFTZXJ2ZXJOb2RlQmFzZUZpbHRlcjsiXX0=