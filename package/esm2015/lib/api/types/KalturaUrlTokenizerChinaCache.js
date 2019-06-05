/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaChinaCacheAlgorithmType } from './KalturaChinaCacheAlgorithmType';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
/**
 * @record
 */
export function KalturaUrlTokenizerChinaCacheArgs() { }
/** @type {?|undefined} */
KalturaUrlTokenizerChinaCacheArgs.prototype.algorithmId;
/** @type {?|undefined} */
KalturaUrlTokenizerChinaCacheArgs.prototype.keyId;
export class KalturaUrlTokenizerChinaCache extends KalturaUrlTokenizer {
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
            objectType: { type: 'c', default: 'KalturaUrlTokenizerChinaCache' },
            algorithmId: { type: 'en', subTypeConstructor: KalturaChinaCacheAlgorithmType, subType: 'KalturaChinaCacheAlgorithmType' },
            keyId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUrlTokenizerChinaCache.prototype.algorithmId;
    /** @type {?} */
    KalturaUrlTokenizerChinaCache.prototype.keyId;
}
typesMappingStorage['KalturaUrlTokenizerChinaCache'] = KalturaUrlTokenizerChinaCache;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFRva2VuaXplckNoaW5hQ2FjaGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxUb2tlbml6ZXJDaGluYUNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7QUFRckYsTUFBTSxvQ0FBcUMsU0FBUSxtQkFBbUI7Ozs7SUFLbEUsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDOUgsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNoaW5hQ2FjaGVBbGdvcml0aG1UeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ2hpbmFDYWNoZUFsZ29yaXRobVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVVybFRva2VuaXplciwgS2FsdHVyYVVybFRva2VuaXplckFyZ3MgfSBmcm9tICcuL0thbHR1cmFVcmxUb2tlbml6ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVcmxUb2tlbml6ZXJDaGluYUNhY2hlQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXJsVG9rZW5pemVyQXJncyB7XG4gICAgYWxnb3JpdGhtSWQ/IDogS2FsdHVyYUNoaW5hQ2FjaGVBbGdvcml0aG1UeXBlO1xuXHRrZXlJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcmxUb2tlbml6ZXJDaGluYUNhY2hlIGV4dGVuZHMgS2FsdHVyYVVybFRva2VuaXplciB7XG5cbiAgICBhbGdvcml0aG1JZCA6IEthbHR1cmFDaGluYUNhY2hlQWxnb3JpdGhtVHlwZTtcblx0a2V5SWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVcmxUb2tlbml6ZXJDaGluYUNhY2hlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVcmxUb2tlbml6ZXJDaGluYUNhY2hlJyB9LFxuXHRcdFx0XHRhbGdvcml0aG1JZCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDaGluYUNhY2hlQWxnb3JpdGhtVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ2hpbmFDYWNoZUFsZ29yaXRobVR5cGUnIH0sXG5cdFx0XHRcdGtleUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVcmxUb2tlbml6ZXJDaGluYUNhY2hlJ10gPSBLYWx0dXJhVXJsVG9rZW5pemVyQ2hpbmFDYWNoZTsiXX0=