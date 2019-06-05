/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemData } from './KalturaESearchItemData';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaESearchItemDataResultArgs() { }
/** @type {?|undefined} */
KalturaESearchItemDataResultArgs.prototype.totalCount;
/** @type {?|undefined} */
KalturaESearchItemDataResultArgs.prototype.items;
/** @type {?|undefined} */
KalturaESearchItemDataResultArgs.prototype.itemsType;
var KalturaESearchItemDataResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchItemDataResult, _super);
    function KalturaESearchItemDataResult(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.items === 'undefined')
            _this.items = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaESearchItemDataResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchItemDataResult' },
            totalCount: { type: 'n' },
            items: { type: 'a', subTypeConstructor: KalturaESearchItemData, subType: 'KalturaESearchItemData' },
            itemsType: { type: 's' }
        });
        return result;
    };
    return KalturaESearchItemDataResult;
}(KalturaObjectBase));
export { KalturaESearchItemDataResult };
if (false) {
    /** @type {?} */
    KalturaESearchItemDataResult.prototype.totalCount;
    /** @type {?} */
    KalturaESearchItemDataResult.prototype.items;
    /** @type {?} */
    KalturaESearchItemDataResult.prototype.itemsType;
}
typesMappingStorage['KalturaESearchItemDataResult'] = KalturaESearchItemDataResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hJdGVtRGF0YVJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hJdGVtRGF0YVJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0FBU2xGLElBQUE7SUFBa0Qsd0RBQWlCO0lBTS9ELHNDQUFZLElBQXdDO1FBQXBELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O0tBQzFEOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN2RyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBckNMO0VBWWtELGlCQUFpQixFQTBCbEUsQ0FBQTtBQTFCRCx3Q0EwQkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hJdGVtRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hJdGVtRGF0YVJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB0b3RhbENvdW50PyA6IG51bWJlcjtcblx0aXRlbXM/IDogS2FsdHVyYUVTZWFyY2hJdGVtRGF0YVtdO1xuXHRpdGVtc1R5cGU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhUmVzdWx0IGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgdG90YWxDb3VudCA6IG51bWJlcjtcblx0aXRlbXMgOiBLYWx0dXJhRVNlYXJjaEl0ZW1EYXRhW107XG5cdGl0ZW1zVHlwZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hJdGVtRGF0YVJlc3VsdEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLml0ZW1zID09PSAndW5kZWZpbmVkJykgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoSXRlbURhdGFSZXN1bHQnIH0sXG5cdFx0XHRcdHRvdGFsQ291bnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aXRlbXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoSXRlbURhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hJdGVtRGF0YScgfSxcblx0XHRcdFx0aXRlbXNUeXBlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoSXRlbURhdGFSZXN1bHQnXSA9IEthbHR1cmFFU2VhcmNoSXRlbURhdGFSZXN1bHQ7Il19