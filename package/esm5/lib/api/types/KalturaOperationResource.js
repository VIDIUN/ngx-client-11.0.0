/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
import { KalturaContentResource } from './KalturaContentResource';
/**
 * @record
 */
export function KalturaOperationResourceArgs() { }
/** @type {?|undefined} */
KalturaOperationResourceArgs.prototype.resource;
/** @type {?|undefined} */
KalturaOperationResourceArgs.prototype.operationAttributes;
/** @type {?|undefined} */
KalturaOperationResourceArgs.prototype.assetParamsId;
var KalturaOperationResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaOperationResource, _super);
    function KalturaOperationResource(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.operationAttributes === 'undefined')
            _this.operationAttributes = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaOperationResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaOperationResource' },
            resource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' },
            operationAttributes: { type: 'a', subTypeConstructor: KalturaOperationAttributes, subType: 'KalturaOperationAttributes' },
            assetParamsId: { type: 'n' }
        });
        return result;
    };
    return KalturaOperationResource;
}(KalturaContentResource));
export { KalturaOperationResource };
if (false) {
    /** @type {?} */
    KalturaOperationResource.prototype.resource;
    /** @type {?} */
    KalturaOperationResource.prototype.operationAttributes;
    /** @type {?} */
    KalturaOperationResource.prototype.assetParamsId;
}
typesMappingStorage['KalturaOperationResource'] = KalturaOperationResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU9wZXJhdGlvblJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhT3BlcmF0aW9uUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7OztBQVM5RixJQUFBO0lBQThDLG9EQUFzQjtJQU1oRSxrQ0FBWSxJQUFvQztRQUFoRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsbUJBQW1CLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQzs7S0FDdEY7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMxRyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzdILGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0FyQ0w7RUFZOEMsc0JBQXNCLEVBMEJuRSxDQUFBO0FBMUJELG9DQTBCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlcyB9IGZyb20gJy4vS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSwgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb250ZW50UmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFPcGVyYXRpb25SZXNvdXJjZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3Mge1xuICAgIHJlc291cmNlPyA6IEthbHR1cmFDb250ZW50UmVzb3VyY2U7XG5cdG9wZXJhdGlvbkF0dHJpYnV0ZXM/IDogS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXNbXTtcblx0YXNzZXRQYXJhbXNJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFPcGVyYXRpb25SZXNvdXJjZSBleHRlbmRzIEthbHR1cmFDb250ZW50UmVzb3VyY2Uge1xuXG4gICAgcmVzb3VyY2UgOiBLYWx0dXJhQ29udGVudFJlc291cmNlO1xuXHRvcGVyYXRpb25BdHRyaWJ1dGVzIDogS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXNbXTtcblx0YXNzZXRQYXJhbXNJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU9wZXJhdGlvblJlc291cmNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFPcGVyYXRpb25SZXNvdXJjZScgfSxcblx0XHRcdFx0cmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRlbnRSZXNvdXJjZScgfSxcblx0XHRcdFx0b3BlcmF0aW9uQXR0cmlidXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMsIHN1YlR5cGUgOiAnS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU9wZXJhdGlvblJlc291cmNlJ10gPSBLYWx0dXJhT3BlcmF0aW9uUmVzb3VyY2U7Il19