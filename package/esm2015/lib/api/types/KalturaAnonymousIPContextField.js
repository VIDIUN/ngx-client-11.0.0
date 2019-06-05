/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaStringField } from './KalturaStringField';
/**
 * @record
 */
export function KalturaAnonymousIPContextFieldArgs() { }
/** @type {?|undefined} */
KalturaAnonymousIPContextFieldArgs.prototype.geoCoderType;
export class KalturaAnonymousIPContextField extends KalturaStringField {
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
            objectType: { type: 'c', default: 'KalturaAnonymousIPContextField' },
            geoCoderType: { type: 'es', subTypeConstructor: KalturaGeoCoderType, subType: 'KalturaGeoCoderType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAnonymousIPContextField.prototype.geoCoderType;
}
typesMappingStorage['KalturaAnonymousIPContextField'] = KalturaAnonymousIPContextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFub255bW91c0lQQ29udGV4dEZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQW5vbnltb3VzSVBDb250ZXh0RmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7QUFPbEYsTUFBTSxxQ0FBc0MsU0FBUSxrQkFBa0I7Ozs7SUFJbEUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7U0FDaEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUdlb0NvZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYUdlb0NvZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nRmllbGQsIEthbHR1cmFTdHJpbmdGaWVsZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdGaWVsZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFub255bW91c0lQQ29udGV4dEZpZWxkQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIHtcbiAgICBnZW9Db2RlclR5cGU/IDogS2FsdHVyYUdlb0NvZGVyVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFub255bW91c0lQQ29udGV4dEZpZWxkIGV4dGVuZHMgS2FsdHVyYVN0cmluZ0ZpZWxkIHtcblxuICAgIGdlb0NvZGVyVHlwZSA6IEthbHR1cmFHZW9Db2RlclR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBbm9ueW1vdXNJUENvbnRleHRGaWVsZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQW5vbnltb3VzSVBDb250ZXh0RmllbGQnIH0sXG5cdFx0XHRcdGdlb0NvZGVyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW9Db2RlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUdlb0NvZGVyVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFub255bW91c0lQQ29udGV4dEZpZWxkJ10gPSBLYWx0dXJhQW5vbnltb3VzSVBDb250ZXh0RmllbGQ7Il19