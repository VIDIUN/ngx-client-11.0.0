/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaServerNode } from './KalturaMediaServerNode';
/**
 * @record
 */
export function KalturaWowzaMediaServerNodeArgs() { }
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.appPrefix;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.transcoder;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.GPUID;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.liveServicePort;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.liveServiceProtocol;
/** @type {?|undefined} */
KalturaWowzaMediaServerNodeArgs.prototype.liveServiceInternalDomain;
var KalturaWowzaMediaServerNode = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaWowzaMediaServerNode, _super);
    function KalturaWowzaMediaServerNode(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaWowzaMediaServerNode.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaWowzaMediaServerNode' },
            appPrefix: { type: 's' },
            transcoder: { type: 's' },
            GPUID: { type: 'n' },
            liveServicePort: { type: 'n' },
            liveServiceProtocol: { type: 's' },
            liveServiceInternalDomain: { type: 's' }
        });
        return result;
    };
    return KalturaWowzaMediaServerNode;
}(KalturaMediaServerNode));
export { KalturaWowzaMediaServerNode };
if (false) {
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.appPrefix;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.transcoder;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.GPUID;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.liveServicePort;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.liveServiceProtocol;
    /** @type {?} */
    KalturaWowzaMediaServerNode.prototype.liveServiceInternalDomain;
}
typesMappingStorage['KalturaWowzaMediaServerNode'] = KalturaWowzaMediaServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVk5RixJQUFBO0lBQWlELHVEQUFzQjtJQVNuRSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQTVDTDtFQWNpRCxzQkFBc0IsRUErQnRFLENBQUE7QUEvQkQsdUNBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYVNlcnZlck5vZGUsIEthbHR1cmFNZWRpYVNlcnZlck5vZGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFTZXJ2ZXJOb2RlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGVBcmdzICBleHRlbmRzIEthbHR1cmFNZWRpYVNlcnZlck5vZGVBcmdzIHtcbiAgICBhcHBQcmVmaXg/IDogc3RyaW5nO1xuXHR0cmFuc2NvZGVyPyA6IHN0cmluZztcblx0R1BVSUQ/IDogbnVtYmVyO1xuXHRsaXZlU2VydmljZVBvcnQ/IDogbnVtYmVyO1xuXHRsaXZlU2VydmljZVByb3RvY29sPyA6IHN0cmluZztcblx0bGl2ZVNlcnZpY2VJbnRlcm5hbERvbWFpbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFXb3d6YU1lZGlhU2VydmVyTm9kZSBleHRlbmRzIEthbHR1cmFNZWRpYVNlcnZlck5vZGUge1xuXG4gICAgYXBwUHJlZml4IDogc3RyaW5nO1xuXHR0cmFuc2NvZGVyIDogc3RyaW5nO1xuXHRHUFVJRCA6IG51bWJlcjtcblx0bGl2ZVNlcnZpY2VQb3J0IDogbnVtYmVyO1xuXHRsaXZlU2VydmljZVByb3RvY29sIDogc3RyaW5nO1xuXHRsaXZlU2VydmljZUludGVybmFsRG9tYWluIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhV293emFNZWRpYVNlcnZlck5vZGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlJyB9LFxuXHRcdFx0XHRhcHBQcmVmaXggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHJhbnNjb2RlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRHUFVJRCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsaXZlU2VydmljZVBvcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGl2ZVNlcnZpY2VQcm90b2NvbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsaXZlU2VydmljZUludGVybmFsRG9tYWluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFXb3d6YU1lZGlhU2VydmVyTm9kZSddID0gS2FsdHVyYVdvd3phTWVkaWFTZXJ2ZXJOb2RlOyJdfQ==