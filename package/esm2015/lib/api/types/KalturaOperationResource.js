/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaOperationResource extends KalturaContentResource {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.operationAttributes === 'undefined')
            this.operationAttributes = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaOperationResource' },
            resource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' },
            operationAttributes: { type: 'a', subTypeConstructor: KalturaOperationAttributes, subType: 'KalturaOperationAttributes' },
            assetParamsId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaOperationResource.prototype.resource;
    /** @type {?} */
    KalturaOperationResource.prototype.operationAttributes;
    /** @type {?} */
    KalturaOperationResource.prototype.assetParamsId;
}
typesMappingStorage['KalturaOperationResource'] = KalturaOperationResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU9wZXJhdGlvblJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhT3BlcmF0aW9uUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7O0FBUzlGLE1BQU0sK0JBQWdDLFNBQVEsc0JBQXNCOzs7O0lBTWhFLFlBQVksSUFBb0M7UUFFNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztLQUN0Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDMUcsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUM3SCxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlcyB9IGZyb20gJy4vS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSwgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb250ZW50UmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFPcGVyYXRpb25SZXNvdXJjZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZUFyZ3Mge1xuICAgIHJlc291cmNlPyA6IEthbHR1cmFDb250ZW50UmVzb3VyY2U7XG5cdG9wZXJhdGlvbkF0dHJpYnV0ZXM/IDogS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXNbXTtcblx0YXNzZXRQYXJhbXNJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFPcGVyYXRpb25SZXNvdXJjZSBleHRlbmRzIEthbHR1cmFDb250ZW50UmVzb3VyY2Uge1xuXG4gICAgcmVzb3VyY2UgOiBLYWx0dXJhQ29udGVudFJlc291cmNlO1xuXHRvcGVyYXRpb25BdHRyaWJ1dGVzIDogS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXNbXTtcblx0YXNzZXRQYXJhbXNJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU9wZXJhdGlvblJlc291cmNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMub3BlcmF0aW9uQXR0cmlidXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFPcGVyYXRpb25SZXNvdXJjZScgfSxcblx0XHRcdFx0cmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRlbnRSZXNvdXJjZScgfSxcblx0XHRcdFx0b3BlcmF0aW9uQXR0cmlidXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMsIHN1YlR5cGUgOiAnS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU9wZXJhdGlvblJlc291cmNlJ10gPSBLYWx0dXJhT3BlcmF0aW9uUmVzb3VyY2U7Il19