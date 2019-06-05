/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaIndexJobDataArgs() { }
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.filter;
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.lastIndexId;
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.lastIndexDepth;
/** @type {?|undefined} */
KalturaIndexJobDataArgs.prototype.shouldUpdate;
export class KalturaIndexJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaIndexJobData' },
            filter: { type: 'o', subTypeConstructor: KalturaFilter, subType: 'KalturaFilter' },
            lastIndexId: { type: 'n' },
            lastIndexDepth: { type: 'n' },
            shouldUpdate: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaIndexJobData.prototype.filter;
    /** @type {?} */
    KalturaIndexJobData.prototype.lastIndexId;
    /** @type {?} */
    KalturaIndexJobData.prototype.lastIndexDepth;
    /** @type {?} */
    KalturaIndexJobData.prototype.shouldUpdate;
}
typesMappingStorage['KalturaIndexJobData'] = KalturaIndexJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUluZGV4Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUluZGV4Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXRFLE1BQU0sMEJBQTJCLFNBQVEsY0FBYzs7OztJQU9uRCxZQUFZLElBQStCO1FBRXZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3RGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJbmRleEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFGaWx0ZXI7XG5cdGxhc3RJbmRleElkPyA6IG51bWJlcjtcblx0bGFzdEluZGV4RGVwdGg/IDogbnVtYmVyO1xuXHRzaG91bGRVcGRhdGU/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUluZGV4Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFGaWx0ZXI7XG5cdGxhc3RJbmRleElkIDogbnVtYmVyO1xuXHRsYXN0SW5kZXhEZXB0aCA6IG51bWJlcjtcblx0c2hvdWxkVXBkYXRlIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUluZGV4Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSW5kZXhKb2JEYXRhJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlcicgfSxcblx0XHRcdFx0bGFzdEluZGV4SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdEluZGV4RGVwdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2hvdWxkVXBkYXRlIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJbmRleEpvYkRhdGEnXSA9IEthbHR1cmFJbmRleEpvYkRhdGE7Il19