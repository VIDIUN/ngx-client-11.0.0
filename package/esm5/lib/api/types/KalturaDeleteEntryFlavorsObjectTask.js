/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeleteFlavorsLogicType } from './KalturaDeleteFlavorsLogicType';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaDeleteEntryFlavorsObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaDeleteEntryFlavorsObjectTaskArgs.prototype.deleteType;
/** @type {?|undefined} */
KalturaDeleteEntryFlavorsObjectTaskArgs.prototype.flavorParamsIds;
var KalturaDeleteEntryFlavorsObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeleteEntryFlavorsObjectTask, _super);
    function KalturaDeleteEntryFlavorsObjectTask(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeleteEntryFlavorsObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeleteEntryFlavorsObjectTask' },
            deleteType: { type: 'en', subTypeConstructor: KalturaDeleteFlavorsLogicType, subType: 'KalturaDeleteFlavorsLogicType' },
            flavorParamsIds: { type: 's' }
        });
        return result;
    };
    return KalturaDeleteEntryFlavorsObjectTask;
}(KalturaObjectTask));
export { KalturaDeleteEntryFlavorsObjectTask };
if (false) {
    /** @type {?} */
    KalturaDeleteEntryFlavorsObjectTask.prototype.deleteType;
    /** @type {?} */
    KalturaDeleteEntryFlavorsObjectTask.prototype.flavorParamsIds;
}
typesMappingStorage['KalturaDeleteEntryFlavorsObjectTask'] = KalturaDeleteEntryFlavorsObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGV0ZUVudHJ5Rmxhdm9yc09iamVjdFRhc2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxldGVFbnRyeUZsYXZvcnNPYmplY3RUYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0FBUS9FLElBQUE7SUFBeUQsK0RBQWlCO0lBS3RFLDZDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDM0gsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQWpDTDtFQVd5RCxpQkFBaUIsRUF1QnpFLENBQUE7QUF2QkQsK0NBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGVsZXRlRmxhdm9yc0xvZ2ljVHlwZSB9IGZyb20gJy4vS2FsdHVyYURlbGV0ZUZsYXZvcnNMb2dpY1R5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdFRhc2ssIEthbHR1cmFPYmplY3RUYXNrQXJncyB9IGZyb20gJy4vS2FsdHVyYU9iamVjdFRhc2snO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEZWxldGVFbnRyeUZsYXZvcnNPYmplY3RUYXNrQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFza0FyZ3Mge1xuICAgIGRlbGV0ZVR5cGU/IDogS2FsdHVyYURlbGV0ZUZsYXZvcnNMb2dpY1R5cGU7XG5cdGZsYXZvclBhcmFtc0lkcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxldGVFbnRyeUZsYXZvcnNPYmplY3RUYXNrIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2sge1xuXG4gICAgZGVsZXRlVHlwZSA6IEthbHR1cmFEZWxldGVGbGF2b3JzTG9naWNUeXBlO1xuXHRmbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxldGVFbnRyeUZsYXZvcnNPYmplY3RUYXNrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEZWxldGVFbnRyeUZsYXZvcnNPYmplY3RUYXNrJyB9LFxuXHRcdFx0XHRkZWxldGVUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURlbGV0ZUZsYXZvcnNMb2dpY1R5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURlbGV0ZUZsYXZvcnNMb2dpY1R5cGUnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRGVsZXRlRW50cnlGbGF2b3JzT2JqZWN0VGFzayddID0gS2FsdHVyYURlbGV0ZUVudHJ5Rmxhdm9yc09iamVjdFRhc2s7Il19