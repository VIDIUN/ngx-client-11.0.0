/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolderFilter } from './KalturaRemoteDropFolderFilter';
/**
 * @record
 */
export function KalturaSshDropFolderBaseFilterArgs() { }
var KalturaSshDropFolderBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSshDropFolderBaseFilter, _super);
    function KalturaSshDropFolderBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSshDropFolderBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSshDropFolderBaseFilter' }
        });
        return result;
    };
    return KalturaSshDropFolderBaseFilter;
}(KalturaRemoteDropFolderFilter));
export { KalturaSshDropFolderBaseFilter };
typesMappingStorage['KalturaSshDropFolderBaseFilter'] = KalturaSshDropFolderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNzaERyb3BGb2xkZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3NoRHJvcEZvbGRlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDZCQUE2QixFQUFxQyxNQUFNLGlDQUFpQyxDQUFDOzs7OztBQU9uSCxJQUFBO0lBQW9ELDBEQUE2QjtJQUk3RSx3Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1NBQzFFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBNUJMO0VBU29ELDZCQUE2QixFQW9CaEYsQ0FBQTtBQXBCRCwwQ0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyRmlsdGVyLCBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZW1vdGVEcm9wRm9sZGVyRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3NoRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTc2hEcm9wRm9sZGVyQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3NoRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNzaERyb3BGb2xkZXJCYXNlRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3NoRHJvcEZvbGRlckJhc2VGaWx0ZXInXSA9IEthbHR1cmFTc2hEcm9wRm9sZGVyQmFzZUZpbHRlcjsiXX0=