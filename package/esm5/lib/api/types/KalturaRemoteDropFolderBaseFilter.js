/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFilter } from './KalturaDropFolderFilter';
/**
 * @record
 */
export function KalturaRemoteDropFolderBaseFilterArgs() { }
var KalturaRemoteDropFolderBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRemoteDropFolderBaseFilter, _super);
    function KalturaRemoteDropFolderBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRemoteDropFolderBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRemoteDropFolderBaseFilter' }
        });
        return result;
    };
    return KalturaRemoteDropFolderBaseFilter;
}(KalturaDropFolderFilter));
export { KalturaRemoteDropFolderBaseFilter };
typesMappingStorage['KalturaRemoteDropFolderBaseFilter'] = KalturaRemoteDropFolderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUmVtb3RlRHJvcEZvbGRlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7OztBQU9qRyxJQUFBO0lBQXVELDZEQUF1QjtJQUkxRSwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBNUJMO0VBU3VELHVCQUF1QixFQW9CN0UsQ0FBQTtBQXBCRCw2Q0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsdGVyLCBLYWx0dXJhRHJvcEZvbGRlckZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFEcm9wRm9sZGVyRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVJlbW90ZURyb3BGb2xkZXJCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckJhc2VGaWx0ZXInXSA9IEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyQmFzZUZpbHRlcjsiXX0=