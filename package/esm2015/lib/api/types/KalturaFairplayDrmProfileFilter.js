/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFairplayDrmProfileBaseFilter } from './KalturaFairplayDrmProfileBaseFilter';
/**
 * @record
 */
export function KalturaFairplayDrmProfileFilterArgs() { }
export class KalturaFairplayDrmProfileFilter extends KalturaFairplayDrmProfileBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaFairplayDrmProfileFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaFairplayDrmProfileFilter'] = KalturaFairplayDrmProfileFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBMkMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFPckksTUFBTSxzQ0FBdUMsU0FBUSxtQ0FBbUM7Ozs7SUFJcEYsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDM0UsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKO0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmFpcnBsYXlEcm1Qcm9maWxlQmFzZUZpbHRlciwgS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZUJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmFpcnBsYXlEcm1Qcm9maWxlQmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZUJhc2VGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZhaXJwbGF5RHJtUHJvZmlsZUZpbHRlciBleHRlbmRzIEthbHR1cmFGYWlycGxheURybVByb2ZpbGVCYXNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmFpcnBsYXlEcm1Qcm9maWxlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGYWlycGxheURybVByb2ZpbGVGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGYWlycGxheURybVByb2ZpbGVGaWx0ZXInXSA9IEthbHR1cmFGYWlycGxheURybVByb2ZpbGVGaWx0ZXI7Il19