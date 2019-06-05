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
export function KalturaThumbParamsBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbParamsBaseFilterArgs.prototype.formatEqual;
export class KalturaThumbParamsBaseFilter extends KalturaAssetParamsFilter {
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
            objectType: { type: 'c', default: 'KalturaThumbParamsBaseFilter' },
            formatEqual: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaThumbParamsBaseFilter.prototype.formatEqual;
}
typesMappingStorage['KalturaThumbParamsBaseFilter'] = KalturaThumbParamsBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0MsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQU9wRyxNQUFNLG1DQUFvQyxTQUFRLHdCQUF3Qjs7OztJQUl0RSxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUNyRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGFpbmVyRm9ybWF0IH0gZnJvbSAnLi9LYWx0dXJhQ29udGFpbmVyRm9ybWF0JztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtc0ZpbHRlciwgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJQYXJhbXNCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXNGaWx0ZXJBcmdzIHtcbiAgICBmb3JtYXRFcXVhbD8gOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVGh1bWJQYXJhbXNCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUFzc2V0UGFyYW1zRmlsdGVyIHtcblxuICAgIGZvcm1hdEVxdWFsIDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJQYXJhbXNCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRmb3JtYXRFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb250YWluZXJGb3JtYXQsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnRhaW5lckZvcm1hdCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlciddID0gS2FsdHVyYVRodW1iUGFyYW1zQmFzZUZpbHRlcjsiXX0=