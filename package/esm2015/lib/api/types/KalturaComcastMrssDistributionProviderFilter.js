/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaComcastMrssDistributionProviderBaseFilter } from './KalturaComcastMrssDistributionProviderBaseFilter';
/**
 * @record
 */
export function KalturaComcastMrssDistributionProviderFilterArgs() { }
export class KalturaComcastMrssDistributionProviderFilter extends KalturaComcastMrssDistributionProviderBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaComcastMrssDistributionProviderFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaComcastMrssDistributionProviderFilter'] = KalturaComcastMrssDistributionProviderFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb21jYXN0TXJzc0Rpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdEQUFnRCxFQUF3RCxNQUFNLG9EQUFvRCxDQUFDOzs7OztBQU81SyxNQUFNLG1EQUFvRCxTQUFRLGdEQUFnRDs7OztJQUk5RyxZQUFZLElBQXdEO1FBRWhFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4Q0FBOEMsRUFBRTtTQUN4RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFFRCxtQkFBbUIsQ0FBQyw4Q0FBOEMsQ0FBQyxHQUFHLDRDQUE0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb21jYXN0TXJzc0Rpc3RyaWJ1dGlvblByb3ZpZGVyQmFzZUZpbHRlciwgS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb21jYXN0TXJzc0Rpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvdmlkZXJCYXNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29tY2FzdE1yc3NEaXN0cmlidXRpb25Qcm92aWRlckZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbWNhc3RNcnNzRGlzdHJpYnV0aW9uUHJvdmlkZXJGaWx0ZXInXSA9IEthbHR1cmFDb21jYXN0TXJzc0Rpc3RyaWJ1dGlvblByb3ZpZGVyRmlsdGVyOyJdfQ==