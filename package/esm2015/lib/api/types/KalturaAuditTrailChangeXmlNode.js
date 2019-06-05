/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailChangeXmlNodeType } from './KalturaAuditTrailChangeXmlNodeType';
import { KalturaAuditTrailChangeItem } from './KalturaAuditTrailChangeItem';
/**
 * @record
 */
export function KalturaAuditTrailChangeXmlNodeArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailChangeXmlNodeArgs.prototype.type;
export class KalturaAuditTrailChangeXmlNode extends KalturaAuditTrailChangeItem {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailChangeXmlNode' },
            type: { type: 'en', subTypeConstructor: KalturaAuditTrailChangeXmlNodeType, subType: 'KalturaAuditTrailChangeXmlNodeType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAuditTrailChangeXmlNode.prototype.type;
}
typesMappingStorage['KalturaAuditTrailChangeXmlNode'] = KalturaAuditTrailChangeXmlNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbENoYW5nZVhtbE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7QUFPN0csTUFBTSxxQ0FBc0MsU0FBUSwyQkFBMkI7Ozs7SUFJM0UsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7U0FDdEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW0sIEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZUl0ZW1BcmdzIHtcbiAgICB0eXBlPyA6IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZVR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZSBleHRlbmRzIEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlSXRlbSB7XG5cbiAgICB0eXBlIDogS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZScgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBdWRpdFRyYWlsQ2hhbmdlWG1sTm9kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF1ZGl0VHJhaWxDaGFuZ2VYbWxOb2RlJ10gPSBLYWx0dXJhQXVkaXRUcmFpbENoYW5nZVhtbE5vZGU7Il19