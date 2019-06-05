/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class KalturaMultiResponse extends Array {
    /**
     * @param {?=} results
     */
    constructor(results = []) {
        super();
        if (new.target) {
            // Set the prototype explicitly - see: https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
            Object.setPrototypeOf(this, new.target.prototype);
        }
        if (results && results.length > 0) {
            this.push(...results);
        }
    }
    /**
     * @return {?}
     */
    hasErrors() {
        return this.filter(result => result.error).length > 0;
    }
    /**
     * @return {?}
     */
    getFirstError() {
        /** @type {?} */
        let result = null;
        for (let i = 0; i < this.length; i++) {
            result = this[i].error;
            if (result) {
                break;
            }
        }
        return result;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1tdWx0aS1yZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkva2FsdHVyYS1tdWx0aS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTSwyQkFBNEIsU0FBUSxLQUEyQjs7OztJQUNqRSxZQUFZLFVBQWtDLEVBQUU7UUFDNUMsS0FBSyxFQUFFLENBQUM7UUFFUixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7WUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDekI7S0FDSjs7OztJQUVNLFNBQVM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUduRCxhQUFhOztRQUNoQixJQUFJLE1BQU0sR0FBd0IsSUFBSSxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXZCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsS0FBSyxDQUFDO2FBQ1Q7U0FDSjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7O0NBSXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlIH0gZnJvbSBcIi4va2FsdHVyYS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgS2FsdHVyYUFQSUV4Y2VwdGlvbiB9IGZyb20gJy4va2FsdHVyYS1hcGktZXhjZXB0aW9uJztcblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNdWx0aVJlc3BvbnNlIGV4dGVuZHMgQXJyYXk8S2FsdHVyYVJlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHRzOiBLYWx0dXJhUmVzcG9uc2U8YW55PltdID0gW10pIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAobmV3LnRhcmdldCkge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBwcm90b3R5cGUgZXhwbGljaXRseSAtIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L3dpa2kvRkFRI3doeS1kb2VzbnQtZXh0ZW5kaW5nLWJ1aWx0LWlucy1saWtlLWVycm9yLWFycmF5LWFuZC1tYXAtd29ya1xuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoKC4uLnJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhhc0Vycm9ycygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQuZXJyb3IpLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpcnN0RXJyb3IoKTogS2FsdHVyYUFQSUV4Y2VwdGlvbiB7XG4gICAgICAgIGxldCByZXN1bHQ6IEthbHR1cmFBUElFeGNlcHRpb24gPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXNbaV0uZXJyb3I7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG59XG4iXX0=