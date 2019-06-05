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
export function KalturaCountryContextFieldArgs() { }
/** @type {?|undefined} */
KalturaCountryContextFieldArgs.prototype.geoCoderType;
export class KalturaCountryContextField extends KalturaStringField {
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
            objectType: { type: 'c', default: 'KalturaCountryContextField' },
            geoCoderType: { type: 'es', subTypeConstructor: KalturaGeoCoderType, subType: 'KalturaGeoCoderType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCountryContextField.prototype.geoCoderType;
}
typesMappingStorage['KalturaCountryContextField'] = KalturaCountryContextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvdW50cnlDb250ZXh0RmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0FBT2xGLE1BQU0saUNBQWtDLFNBQVEsa0JBQWtCOzs7O0lBSTlELFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW9Db2RlclR5cGUgfSBmcm9tICcuL0thbHR1cmFHZW9Db2RlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZ0ZpZWxkLCBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkQXJncyAgZXh0ZW5kcyBLYWx0dXJhU3RyaW5nRmllbGRBcmdzIHtcbiAgICBnZW9Db2RlclR5cGU/IDogS2FsdHVyYUdlb0NvZGVyVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvdW50cnlDb250ZXh0RmllbGQgZXh0ZW5kcyBLYWx0dXJhU3RyaW5nRmllbGQge1xuXG4gICAgZ2VvQ29kZXJUeXBlIDogS2FsdHVyYUdlb0NvZGVyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvdW50cnlDb250ZXh0RmllbGRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvdW50cnlDb250ZXh0RmllbGQnIH0sXG5cdFx0XHRcdGdlb0NvZGVyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW9Db2RlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUdlb0NvZGVyVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvdW50cnlDb250ZXh0RmllbGQnXSA9IEthbHR1cmFDb3VudHJ5Q29udGV4dEZpZWxkOyJdfQ==