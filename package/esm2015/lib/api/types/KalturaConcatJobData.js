/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaConcatJobDataArgs() { }
/** @type {?|undefined} */
KalturaConcatJobDataArgs.prototype.srcFiles;
/** @type {?|undefined} */
KalturaConcatJobDataArgs.prototype.destFilePath;
/** @type {?|undefined} */
KalturaConcatJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaConcatJobDataArgs.prototype.offset;
/** @type {?|undefined} */
KalturaConcatJobDataArgs.prototype.duration;
/** @type {?|undefined} */
KalturaConcatJobDataArgs.prototype.concatenatedDuration;
/** @type {?|undefined} */
KalturaConcatJobDataArgs.prototype.shouldSort;
export class KalturaConcatJobData extends KalturaJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.srcFiles === 'undefined')
            this.srcFiles = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConcatJobData' },
            srcFiles: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            destFilePath: { type: 's' },
            flavorAssetId: { type: 's' },
            offset: { type: 'n' },
            duration: { type: 'n' },
            concatenatedDuration: { type: 'n' },
            shouldSort: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConcatJobData.prototype.srcFiles;
    /** @type {?} */
    KalturaConcatJobData.prototype.destFilePath;
    /** @type {?} */
    KalturaConcatJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaConcatJobData.prototype.offset;
    /** @type {?} */
    KalturaConcatJobData.prototype.duration;
    /** @type {?} */
    KalturaConcatJobData.prototype.concatenatedDuration;
    /** @type {?} */
    KalturaConcatJobData.prototype.shouldSort;
}
typesMappingStorage['KalturaConcatJobData'] = KalturaConcatJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmNhdEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb25jYXRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdEUsTUFBTSwyQkFBNEIsU0FBUSxjQUFjOzs7O0lBVXBELFlBQVksSUFBZ0M7UUFFeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ2hFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3hGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0cmluZyB9IGZyb20gJy4vS2FsdHVyYVN0cmluZyc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbmNhdEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgc3JjRmlsZXM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHRkZXN0RmlsZVBhdGg/IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0b2Zmc2V0PyA6IG51bWJlcjtcblx0ZHVyYXRpb24/IDogbnVtYmVyO1xuXHRjb25jYXRlbmF0ZWREdXJhdGlvbj8gOiBudW1iZXI7XG5cdHNob3VsZFNvcnQ/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbmNhdEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBzcmNGaWxlcyA6IEthbHR1cmFTdHJpbmdbXTtcblx0ZGVzdEZpbGVQYXRoIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRvZmZzZXQgOiBudW1iZXI7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRjb25jYXRlbmF0ZWREdXJhdGlvbiA6IG51bWJlcjtcblx0c2hvdWxkU29ydCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb25jYXRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc3JjRmlsZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnNyY0ZpbGVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbmNhdEpvYkRhdGEnIH0sXG5cdFx0XHRcdHNyY0ZpbGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU3RyaW5nLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmcnIH0sXG5cdFx0XHRcdGRlc3RGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb25jYXRlbmF0ZWREdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzaG91bGRTb3J0IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb25jYXRKb2JEYXRhJ10gPSBLYWx0dXJhQ29uY2F0Sm9iRGF0YTsiXX0=