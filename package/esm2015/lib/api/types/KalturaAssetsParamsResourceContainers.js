/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetParamsResourceContainer } from './KalturaAssetParamsResourceContainer';
import { KalturaResource } from './KalturaResource';
/**
 * @record
 */
export function KalturaAssetsParamsResourceContainersArgs() { }
/** @type {?|undefined} */
KalturaAssetsParamsResourceContainersArgs.prototype.resources;
export class KalturaAssetsParamsResourceContainers extends KalturaResource {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.resources === 'undefined')
            this.resources = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetsParamsResourceContainers' },
            resources: { type: 'a', subTypeConstructor: KalturaAssetParamsResourceContainer, subType: 'KalturaAssetParamsResourceContainer' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAssetsParamsResourceContainers.prototype.resources;
}
typesMappingStorage['KalturaAssetsParamsResourceContainers'] = KalturaAssetsParamsResourceContainers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFzc2V0c1BhcmFtc1Jlc291cmNlQ29udGFpbmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7QUFPekUsTUFBTSw0Q0FBNkMsU0FBUSxlQUFlOzs7O0lBSXRFLFlBQVksSUFBaUQ7UUFFekQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ2xFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1DQUFtQyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtTQUM1SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lciB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlc291cmNlLCBLYWx0dXJhUmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBc3NldHNQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcnNBcmdzICBleHRlbmRzIEthbHR1cmFSZXNvdXJjZUFyZ3Mge1xuICAgIHJlc291cmNlcz8gOiBLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcltdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXRzUGFyYW1zUmVzb3VyY2VDb250YWluZXJzIGV4dGVuZHMgS2FsdHVyYVJlc291cmNlIHtcblxuICAgIHJlc291cmNlcyA6IEthbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldHNQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcnNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZXNvdXJjZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlc291cmNlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldHNQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcnMnIH0sXG5cdFx0XHRcdHJlc291cmNlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBc3NldHNQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcnMnXSA9IEthbHR1cmFBc3NldHNQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcnM7Il19