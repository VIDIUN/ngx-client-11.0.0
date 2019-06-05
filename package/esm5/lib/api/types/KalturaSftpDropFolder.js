/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSshDropFolder } from './KalturaSshDropFolder';
/**
 * @record
 */
export function KalturaSftpDropFolderArgs() { }
var KalturaSftpDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSftpDropFolder, _super);
    function KalturaSftpDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSftpDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSftpDropFolder' }
        });
        return result;
    };
    return KalturaSftpDropFolder;
}(KalturaSshDropFolder));
export { KalturaSftpDropFolder };
typesMappingStorage['KalturaSftpDropFolder'] = KalturaSftpDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNmdHBEcm9wRm9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2Z0cERyb3BGb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7OztBQU94RixJQUFBO0lBQTJDLGlEQUFvQjtJQUkzRCwrQkFBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1NBQ2pFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBNUJMO0VBUzJDLG9CQUFvQixFQW9COUQsQ0FBQTtBQXBCRCxpQ0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTc2hEcm9wRm9sZGVyLCBLYWx0dXJhU3NoRHJvcEZvbGRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTc2hEcm9wRm9sZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2Z0cERyb3BGb2xkZXJBcmdzICBleHRlbmRzIEthbHR1cmFTc2hEcm9wRm9sZGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTZnRwRHJvcEZvbGRlciBleHRlbmRzIEthbHR1cmFTc2hEcm9wRm9sZGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2Z0cERyb3BGb2xkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNmdHBEcm9wRm9sZGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2Z0cERyb3BGb2xkZXInXSA9IEthbHR1cmFTZnRwRHJvcEZvbGRlcjsiXX0=