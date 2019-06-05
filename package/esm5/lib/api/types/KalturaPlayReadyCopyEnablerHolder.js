/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyCopyEnablerType } from './KalturaPlayReadyCopyEnablerType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlayReadyCopyEnablerHolderArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyCopyEnablerHolderArgs.prototype.type;
var KalturaPlayReadyCopyEnablerHolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlayReadyCopyEnablerHolder, _super);
    function KalturaPlayReadyCopyEnablerHolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlayReadyCopyEnablerHolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyCopyEnablerHolder' },
            type: { type: 'es', subTypeConstructor: KalturaPlayReadyCopyEnablerType, subType: 'KalturaPlayReadyCopyEnablerType' }
        });
        return result;
    };
    return KalturaPlayReadyCopyEnablerHolder;
}(KalturaObjectBase));
export { KalturaPlayReadyCopyEnablerHolder };
if (false) {
    /** @type {?} */
    KalturaPlayReadyCopyEnablerHolder.prototype.type;
}
typesMappingStorage['KalturaPlayReadyCopyEnablerHolder'] = KalturaPlayReadyCopyEnablerHolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeUNvcHlFbmFibGVySG9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBT2xGLElBQUE7SUFBdUQsNkRBQWlCO0lBSXBFLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywrQkFBK0IsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDaEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0E5Qkw7RUFVdUQsaUJBQWlCLEVBcUJ2RSxDQUFBO0FBckJELDZDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlclR5cGUgfSBmcm9tICcuL0thbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlckhvbGRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB0eXBlPyA6IEthbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlclR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlckhvbGRlciBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHR5cGUgOiBLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBsYXlSZWFkeUNvcHlFbmFibGVySG9sZGVyJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlSZWFkeUNvcHlFbmFibGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXInXSA9IEthbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlckhvbGRlcjsiXX0=