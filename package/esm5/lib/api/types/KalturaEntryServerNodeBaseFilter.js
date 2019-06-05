/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaEntryServerNodeBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.serverNodeIdEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.serverTypeEqual;
/** @type {?|undefined} */
KalturaEntryServerNodeBaseFilterArgs.prototype.serverTypeIn;
var KalturaEntryServerNodeBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryServerNodeBaseFilter, _super);
    function KalturaEntryServerNodeBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryServerNodeBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryServerNodeBaseFilter' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            serverNodeIdEqual: { type: 'n' },
            createdAtLessThanOrEqual: { type: 'd' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaEntryServerNodeStatus, subType: 'KalturaEntryServerNodeStatus' },
            statusIn: { type: 's' },
            serverTypeEqual: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            serverTypeIn: { type: 's' }
        });
        return result;
    };
    return KalturaEntryServerNodeBaseFilter;
}(KalturaFilter));
export { KalturaEntryServerNodeBaseFilter };
if (false) {
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.serverNodeIdEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.serverTypeEqual;
    /** @type {?} */
    KalturaEntryServerNodeBaseFilter.prototype.serverTypeIn;
}
typesMappingStorage['KalturaEntryServerNodeBaseFilter'] = KalturaEntryServerNodeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2VydmVyTm9kZUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCbkUsSUFBQTtJQUFzRCw0REFBYTtJQWMvRCwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQzFILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDMUgsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJDQTdETDtFQXFCc0QsYUFBYSxFQXlDbEUsQ0FBQTtBQXpDRCw0Q0F5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGVudHJ5SWRJbj8gOiBzdHJpbmc7XG5cdHNlcnZlck5vZGVJZEVxdWFsPyA6IG51bWJlcjtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0c2VydmVyVHlwZUVxdWFsPyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlO1xuXHRzZXJ2ZXJUeXBlSW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgZW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRlbnRyeUlkSW4gOiBzdHJpbmc7XG5cdHNlcnZlck5vZGVJZEVxdWFsIDogbnVtYmVyO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzZXJ2ZXJUeXBlRXF1YWwgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0c2VydmVyVHlwZUluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0ZW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJOb2RlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlclR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeVNlcnZlck5vZGVUeXBlJyB9LFxuXHRcdFx0XHRzZXJ2ZXJUeXBlSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5U2VydmVyTm9kZUJhc2VGaWx0ZXInXSA9IEthbHR1cmFFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyOyJdfQ==