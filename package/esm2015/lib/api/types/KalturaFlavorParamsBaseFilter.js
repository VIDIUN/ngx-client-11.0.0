/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParamsFilter } from './KalturaAssetParamsFilter';
/**
 * @record
 */
export function KalturaFlavorParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFlavorParamsBaseFilterArgs.prototype.formatEqual;
export class KalturaFlavorParamsBaseFilter extends KalturaAssetParamsFilter {
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
            objectType: { type: 'c', default: 'KalturaFlavorParamsBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorParamsBaseFilter.prototype.formatEqual;
}
typesMappingStorage['KalturaFlavorParamsBaseFilter'] = KalturaFlavorParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtc0Jhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGbGF2b3JQYXJhbXNCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFnQyxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7O0FBT3BHLE1BQU0sb0NBQXFDLFNBQVEsd0JBQXdCOzs7O0lBSXZFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ3JHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb250YWluZXJGb3JtYXQgfSBmcm9tICcuL0thbHR1cmFDb250YWluZXJGb3JtYXQnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyLCBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGbGF2b3JQYXJhbXNCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXJBcmdzIHtcbiAgICBmb3JtYXRFcXVhbD8gOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmxhdm9yUGFyYW1zQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlciB7XG5cbiAgICBmb3JtYXRFcXVhbCA6IEthbHR1cmFDb250YWluZXJGb3JtYXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGbGF2b3JQYXJhbXNCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGbGF2b3JQYXJhbXNCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRmb3JtYXRFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250YWluZXJGb3JtYXQsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRhaW5lckZvcm1hdCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZsYXZvclBhcmFtc0Jhc2VGaWx0ZXInXSA9IEthbHR1cmFGbGF2b3JQYXJhbXNCYXNlRmlsdGVyOyJdfQ==